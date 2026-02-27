// =============================================================================
// CCD LANGUAGE SERVER
// =============================================================================
// Implements the Language Server Protocol for .ccd files.
// Features:
//   • Completion  – field names and their accepted values
//   • Hover       – description, unit, valid range and allowed values
//   • Diagnostics – unknown fields, invalid enum values, out-of-range numbers,
//                   missing required fields
//   • Document symbols – outline view (one entry per section)
// =============================================================================

import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  InitializeResult,
  TextDocumentSyncKind,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  Hover,
  MarkupKind,
  Diagnostic,
  DiagnosticSeverity,
  DocumentSymbol,
  SymbolKind,
  Range,
  Position,
} from 'vscode-languageserver/node';

import { TextDocument } from 'vscode-languageserver-textdocument';
import { SCHEMAS, SECTIONS, ValueType, CcdSchema } from './schema';

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------
const connection = createConnection(ProposedFeatures.all);
const documents  = new TextDocuments(TextDocument);

connection.onInitialize((_params: InitializeParams): InitializeResult => ({
  capabilities: {
    textDocumentSync:      TextDocumentSyncKind.Incremental,
    completionProvider:    { resolveProvider: false, triggerCharacters: ['=', ' '] },
    hoverProvider:         true,
    documentSymbolProvider: true,
  },
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Strip inline comment and return trimmed line content. */
function stripComment(line: string): string {
  const idx = line.indexOf('#');
  return (idx >= 0 ? line.slice(0, idx) : line).trim();
}

/** Return the zero-based range covering an entire line. */
function lineRange(lineIndex: number, doc: TextDocument): Range {
  const start = doc.offsetAt(Position.create(lineIndex, 0));
  const end   = lineIndex + 1 < doc.lineCount
    ? doc.offsetAt(Position.create(lineIndex + 1, 0)) - 1
    : doc.getText().length;
  return { start: Position.create(lineIndex, 0),
           end:   doc.positionAt(end) };
}

/** Build a markdown hover string for a field definition. */
function buildHoverMarkdown(fieldName: string, langId: string): string {
  const schema = SCHEMAS[langId] || SCHEMAS['ccd'];
  const def = schema[fieldName];
  if (!def) return '';

  const lines: string[] = [
    `### \`${fieldName}\``,
    `*Section: ${def.section}*`,
    '',
    def.description,
  ];

  if (def.unit) {
    lines.push('', `**Unit:** ${def.unit}`);
  }

  if (def.valueType === 'enum' && def.allowedValues && def.allowedValues.length > 0) {
    lines.push('', `**Allowed values:**`);
    for (const v of def.allowedValues) {
      lines.push(`  - \`${v}\``);
    }
  }

  if (def.valueType === 'number' && def.range) {
    lines.push('', `**Range:** \`${def.range.min}\` – \`${def.range.max}\``);
  }

  if (def.required) {
    lines.push('', `> ⚠️ **Required field**`);
  }

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Completion
// ---------------------------------------------------------------------------
connection.onCompletion((params: TextDocumentPositionParams): CompletionItem[] => {
  const doc = documents.get(params.textDocument.uri);
  if (!doc) return [];

  const lineText = doc.getText({
    start: { line: params.position.line, character: 0 },
    end:   { line: params.position.line, character: params.position.character },
  });

  const cleanLine = stripComment(lineText);

  const schema = SCHEMAS[doc.languageId] || SCHEMAS['ccd'];

  // After "=" → suggest values for the field on this line
  const rhsMatch = cleanLine.match(/^([\w.]+)\s*=\s*(.*)$/);
  if (rhsMatch) {
    const fieldName = rhsMatch[1];
    const def = schema[fieldName];
    if (!def) return [];

    if ((def.valueType === 'enum' || def.valueType === 'array') && def.allowedValues) {
      return def.allowedValues.map(v => ({
        label:         v,
        kind:          CompletionItemKind.EnumMember,
        detail:        def.unit ?? def.valueType,
        documentation: def.description,
      }));
    }

    if (def.valueType === 'boolean') {
      return ['true', 'false'].map(label => ({
        label,
        kind:          CompletionItemKind.Value,
        documentation: def.description,
      }));
    }

    if (def.valueType === 'number') {
      const rangeNote = def.range
        ? `Range: ${def.range.min} – ${def.range.max}${def.unit ? ' ' + def.unit : ''}`
        : def.unit ?? 'number';
      return [{
        label:         '',
        kind:          CompletionItemKind.Value,
        detail:        rangeNote,
        documentation: def.description,
      }];
    }

    return [];
  }

  // On the left-hand side (no "=" yet) → suggest field names grouped by section
  const fieldNameSoFar = cleanLine.match(/^([\w.]*)$/)?.[1] ?? '';
  const items: CompletionItem[] = [];

  for (const [fieldName, def] of Object.entries(schema)) {
    if (!fieldName.startsWith(fieldNameSoFar)) continue;

    const typeLabel = def.allowedValues && def.allowedValues.length > 0
      ? `enum (${def.allowedValues.join(' | ')})`
      : def.unit ? `${def.valueType} ${def.unit}` : def.valueType;

    items.push({
      label:      fieldName,
      kind:       CompletionItemKind.Property,
      detail:     `[${def.section}]  ${typeLabel}`,
      insertText: `${fieldName} = `,
      documentation: {
        kind:  MarkupKind.Markdown,
        value: buildHoverMarkdown(fieldName, doc.languageId),
      },
      sortText: `${def.section}_${fieldName}`,  // group by section in the list
    });
  }

  return items;
});

// ---------------------------------------------------------------------------
// Hover
// ---------------------------------------------------------------------------
connection.onHover((params): Hover | null => {
  const doc = documents.get(params.textDocument.uri);
  if (!doc) return null;

  const lineText = doc.getText({
    start: { line: params.position.line, character: 0 },
    end:   { line: params.position.line, character: 999 },
  });

  // Match the field name part of "fieldName = value"
  const match = stripComment(lineText).match(/^([\w.]+)\s*=/);
  if (!match) return null;

  const markdown = buildHoverMarkdown(match[1], doc.languageId);
  if (!markdown) return null;

  return {
    contents: { kind: MarkupKind.Markdown, value: markdown },
  };
});

// ---------------------------------------------------------------------------
// Diagnostics
// ---------------------------------------------------------------------------
function validateDocument(doc: TextDocument): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  const seenFields  = new Set<string>();
  const schema = SCHEMAS[doc.languageId] || SCHEMAS['ccd'];

  for (let i = 0; i < doc.lineCount; i++) {
    const rawLine   = doc.getText({ start: { line: i, character: 0 },
                                    end:   { line: i, character: 10000 } });
    const cleanLine = stripComment(rawLine);

    if (!cleanLine) continue;

    // ── Parse "fieldName = value" ─────────────────────────────────────────
    const assignMatch = cleanLine.match(/^([\w.]+)\s*=\s*(.*)$/);
    if (!assignMatch) {
      // Line has content but doesn't look like an assignment or comment
      diagnostics.push({
        severity: DiagnosticSeverity.Warning,
        range:    lineRange(i, doc),
        message:  `Line is not a valid assignment (expected: fieldName = value).`,
        source:   'ccd-lsp',
      });
      continue;
    }

    const [, fieldName, rawValue] = assignMatch;
    const value = rawValue.trim().replace(/^'|'$/g, '');  // strip surrounding quotes
    seenFields.add(fieldName);

    const def = schema[fieldName];

    // ── Unknown field ─────────────────────────────────────────────────────
    if (!def) {
      diagnostics.push({
        severity: DiagnosticSeverity.Warning,
        range: {
          start: { line: i, character: 0 },
          end:   { line: i, character: fieldName.length },
        },
        message: `Unknown field '${fieldName}'. Check the Concordia manual or schema.ts.`,
        source:  'ccd-lsp',
      });
      continue;
    }

    // ── Enum validation ───────────────────────────────────────────────────
    if (def.valueType === 'enum' && def.allowedValues && def.allowedValues.length > 0) {
      if (!def.allowedValues.includes(value)) {
        diagnostics.push({
          severity: DiagnosticSeverity.Error,
          range:    lineRange(i, doc),
          message:  `Invalid value '${value}' for '${fieldName}'.\n`
                  + `Allowed: ${def.allowedValues.map(v => `'${v}'`).join(', ')}.`,
          source:   'ccd-lsp',
        });
      }
    }

    // ── Boolean validation ────────────────────────────────────────────────
    if (def.valueType === 'boolean') {
      if (value !== 'true' && value !== 'false') {
        diagnostics.push({
          severity: DiagnosticSeverity.Error,
          range:    lineRange(i, doc),
          message:  `'${fieldName}' expects 'true' or 'false', got '${value}'.`,
          source:   'ccd-lsp',
        });
      }
    }

    // ── Numeric range validation ──────────────────────────────────────────
    if (def.valueType === 'number') {
      const num = parseFloat(value);
      if (value !== '' && isNaN(num)) {
        diagnostics.push({
          severity: DiagnosticSeverity.Error,
          range:    lineRange(i, doc),
          message:  `'${fieldName}' expects a numeric value, got '${value}'.`,
          source:   'ccd-lsp',
        });
      } else if (!isNaN(num) && def.range) {
        if (num < def.range.min || num > def.range.max) {
          diagnostics.push({
            severity: DiagnosticSeverity.Warning,
            range:    lineRange(i, doc),
            message:  `Value ${num} is outside the expected range `
                    + `[${def.range.min}, ${def.range.max}]`
                    + (def.unit ? ` ${def.unit}` : '') + `.`,
            source:   'ccd-lsp',
          });
        }
      }
    }

    // ── Empty value ───────────────────────────────────────────────────────
    if (rawValue.trim() === '') {
      diagnostics.push({
        severity: DiagnosticSeverity.Warning,
        range:    lineRange(i, doc),
        message:  `'${fieldName}' has no value assigned.`,
        source:   'ccd-lsp',
      });
    }
  }

  // ── Missing required fields ───────────────────────────────────────────────
  for (const [fieldName, def] of Object.entries(schema)) {
    if (def.required && !seenFields.has(fieldName)) {
      diagnostics.push({
        severity: DiagnosticSeverity.Warning,
        range: { start: Position.create(0, 0), end: Position.create(0, 0) },
        message:  `Required field '${fieldName}' (${def.section}) is missing from this file.`,
        source:   'ccd-lsp',
      });
    }
  }

  return diagnostics;
}

documents.onDidChangeContent(change => {
  const diagnostics = validateDocument(change.document);
  connection.sendDiagnostics({ uri: change.document.uri, diagnostics });
});

documents.onDidOpen(event => {
  const diagnostics = validateDocument(event.document);
  connection.sendDiagnostics({ uri: event.document.uri, diagnostics });
});

// ---------------------------------------------------------------------------
// Document Symbols (Outline View)
// ---------------------------------------------------------------------------
connection.onDocumentSymbol((params): DocumentSymbol[] => {
  const doc = documents.get(params.textDocument.uri);
  if (!doc) return [];
  const schema = SCHEMAS[doc.languageId] || SCHEMAS['ccd'];

  // Build one parent symbol per section, with each field as a child.
  const sectionMap = new Map<string, DocumentSymbol>();

  for (let i = 0; i < doc.lineCount; i++) {
    const rawLine   = doc.getText({ start: { line: i, character: 0 },
                                    end:   { line: i, character: 10000 } });
    const cleanLine = stripComment(rawLine);
    const match = cleanLine.match(/^([\w.]+)\s*=\s*(.*)$/);
    if (!match) continue;

    const [, fieldName, value] = match;
    const def = schema[fieldName];
    const sectionLabel = def?.section ?? 'Unknown';

    if (!sectionMap.has(sectionLabel)) {
      sectionMap.set(sectionLabel, {
        name:           sectionLabel,
        kind:           SymbolKind.Module,
        range:          lineRange(i, doc),
        selectionRange: lineRange(i, doc),
        children:       [],
      });
    }

    const section = sectionMap.get(sectionLabel)!;

    section.children!.push({
      name:           fieldName,
      detail:         value.trim(),
      kind:           SymbolKind.Property,
      range:          lineRange(i, doc),
      selectionRange: lineRange(i, doc),
    });

    // Expand the section range to cover all its children
    section.range.end = lineRange(i, doc).end;
  }

  return Array.from(sectionMap.values());
});

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------
documents.listen(connection);
connection.listen();
