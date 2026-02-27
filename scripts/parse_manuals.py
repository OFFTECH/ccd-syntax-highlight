import fitz
import json
import re
import sys
import os

def parse_manual(pdf_path, output_json_path, prefix=""):
    print(f"Parsing {pdf_path}...")
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"Failed to open {pdf_path}: {e}")
        return

    schema = {}
    current_section = "General"
    
    # Very basic heuristic: Look for lines that might be keywords (all caps, start of line)
    keyword_pattern = re.compile(r'^([A-Z0-9_\-]+)\s*(.*)')
    
    # We will try to scan through the document
    text = ""
    for page in doc:
        text += page.get_text() + "\n"
        
    lines = text.split('\n')
    
    # Try to find card definitions
    # A lot of manuals use 'Card:' or just uppercase words
    in_card_desc = False
    current_keyword = None
    current_desc = []
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # If it looks like a section header (e.g. 3.4 Card NAME)
        sec_match = re.match(r'^\d+\.\d+\s+(?:Card|Keyword)?\s*([A-Z0-9_\-]+)', line, re.IGNORECASE)
        if sec_match:
            if current_keyword:
                schema[current_keyword] = {
                    "description": " ".join(current_desc).strip(),
                    "valueType": "number", # Default placeholder
                    "section": current_section
                }
            current_keyword = prefix + sec_match.group(1).upper()
            current_desc = []
            continue
            
        # Alternative: Just looking for uppercase words that might be keywords at the start of paragraphs
        if current_keyword is None:
            kw_match = keyword_pattern.match(line)
            # Filter out common false positives like "THE", "IN", "THIS"
            if kw_match and len(kw_match.group(1)) > 2 and kw_match.group(1) not in ["THE", "AND", "FOR", "THIS", "WITH", "THAT", "FROM"]:
                current_keyword = prefix + kw_match.group(1)
                current_desc = [kw_match.group(2)]
                
        elif current_keyword:
            # Check if this is a new keyword
            kw_match = keyword_pattern.match(line)
            if kw_match and len(kw_match.group(1)) > 2 and kw_match.group(1) not in ["THE", "AND", "FOR", "THIS", "WITH", "THAT", "FROM"]:
                # Save previous
                schema[current_keyword] = {
                    "description": " ".join(current_desc).strip(),
                    "valueType": "number", # Default placeholder
                    "section": current_section
                }
                # Start new
                current_keyword = prefix + kw_match.group(1)
                current_desc = [kw_match.group(2)]
            else:
                if len(current_desc) < 3: # Keep descriptions short
                    current_desc.append(line)
                    
    # Save last one
    if current_keyword:
        schema[current_keyword] = {
            "description": " ".join(current_desc).strip()[:200] + ("..." if len(" ".join(current_desc)) > 200 else ""),
            "valueType": "number",
            "section": current_section
        }
        
    # Write to JSON
    with open(output_json_path, 'w', encoding='utf-8') as f:
        json.dump(schema, f, indent=2)
    print(f"Extracted {len(schema)} potential keywords to {output_json_path}")

if __name__ == "__main__":
    manuals_dir = os.path.join(os.path.dirname(__file__), '..', 'manuals')
    out_dir = os.path.join(os.path.dirname(__file__), '..', 'src', 'schema', 'generated')
    os.makedirs(out_dir, exist_ok=True)
    
    parse_manual(os.path.join(manuals_dir, 'Uflex2d_usermanual.pdf'), os.path.join(out_dir, 'uflex_raw.json'))
    parse_manual(os.path.join(manuals_dir, 'bflex2010_usermanual.pdf'), os.path.join(out_dir, 'bflex_raw.json'))
    parse_manual(os.path.join(manuals_dir, 'simla_usermanual.pdf'), os.path.join(out_dir, 'simla_raw.json'))
