import json
import os
import re

def generate_ts(schema_name, raw_json_path, out_ts_path):
    with open(raw_json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    ts_code = f"""import {{ CcdSchema }} from '../schema';

export const {schema_name}_SCHEMA: CcdSchema = {{
"""

    for kw, props in data.items():
        # Sanitize keyword for TS key
        safe_kw = kw.replace("'", "\\'")
        # Sanitize description
        desc = props.get("description", "").replace("'", "\\'").replace('\n', ' ')
        
        ts_code += f"""  '{safe_kw}': {{
    description: '{desc}',
    valueType: 'string', // Default placeholder
    section: '{props.get("section", "General")}',
  }},
"""
    
    ts_code += "};\n"
    
    with open(out_ts_path, 'w', encoding='utf-8') as f:
        f.write(ts_code)
        
    print(f"Generated {out_ts_path}")

if __name__ == "__main__":
    out_dir = os.path.join(os.path.dirname(__file__), '..', 'src', 'schema')
    gen_dir = os.path.join(out_dir, 'generated')
    
    generate_ts("UFLEX", os.path.join(gen_dir, 'uflex_raw.json'), os.path.join(out_dir, 'uflexSchema.ts'))
    generate_ts("BFLEX", os.path.join(gen_dir, 'bflex_raw.json'), os.path.join(out_dir, 'bflexSchema.ts'))
    generate_ts("SIMLA", os.path.join(gen_dir, 'simla_raw.json'), os.path.join(out_dir, 'simlaSchema.ts'))
