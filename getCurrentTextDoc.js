import * as vscode from "vscode";

vscode.workspace.textDocuments.forEach((t, i) => {
  vscode.window.showInformationMessage(`index: ${i}   fileName: ${t.fileName}`);
});
