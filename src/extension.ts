// =============================================================================
// CCD EXTENSION ENTRY POINT (client side)
// =============================================================================
// This file is what VSCode loads.  It starts the language server as a
// separate Node.js process and wires the two together via IPC.
// You do not need to edit this file when adding new fields — all changes
// for language intelligence go into src/schema.ts.
// =============================================================================

import * as path from 'path';
import { ExtensionContext, window } from 'vscode';
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext): void {
  // Path to the compiled server entry point
  const serverModule = context.asAbsolutePath(path.join('out', 'server.js'));

  const serverOptions: ServerOptions = {
    // Production: run server normally
    run: {
      module:    serverModule,
      transport: TransportKind.ipc,
    },
    // Debug (F5): attach Node inspector on port 6009
    debug: {
      module:    serverModule,
      transport: TransportKind.ipc,
      options:   { execArgv: ['--nolazy', '--inspect=6009'] },
    },
  };

  const clientOptions: LanguageClientOptions = {
    // Only activate for .ccd files
    documentSelector: [{ scheme: 'file', language: 'ccd' }],
  };

  client = new LanguageClient(
    'ccd-language-server',
    'CCD Language Server',
    serverOptions,
    clientOptions,
  );

  client.start().catch(err => {
    window.showErrorMessage(`CCD Language Server failed to start: ${err}`);
  });
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) return undefined;
  return client.stop();
}
