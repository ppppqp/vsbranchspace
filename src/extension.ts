
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('workspcace file'+vscode.workspace.textDocuments);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const uri = vscode.workspace.textDocuments[0].uri;
	let disposable = vscode.commands.registerCommand('vsbranchspace.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// file:///Users/panqp/Documents/GitHub/vsbranchspace/workspace.code-workspace
		/*new vscode.Uri('file', '', '/Users/panqp/Documents/GitHub/vsbranchspace/workspace.code-workspace', '')*/
		vscode.workspace.openTextDocument(vscode.Uri.file('/Users/panqp/Documents/GitHub/vsbranchspace/.gitignore')).then(document => vscode.window.showTextDocument(document, {preview: false}))
		vscode.workspace.openTextDocument(vscode.Uri.file('/Users/panqp/Documents/GitHub/vsbranchspace/.vscodeignore')).then(document => vscode.window.showTextDocument(document, {preview: false}))

		vscode.window.showInformationMessage('workspcace file '+JSON.stringify(uri));
		/*
		const url = {
			"$mid":1,
			"fsPath":"/Users/panqp/Documents/GitHub/vsbranchspace/workspace.code-workspace",
			"external":"file:///Users/panqp/Documents/GitHub/vsbranchspace/workspace.code-workspace",
			"path":"/Users/panqp/Documents/GitHub/vsbranchspace/workspace.code-workspace",
			"scheme":"file"
		}


		*/
		// vscode.window.showInformationMessage('workspcace file '+vscode.workspace.textDocuments[0].uri);
		// vscode.workspace.openTextDocument().then(()=>{vscode.window.showInformationMessage('opened');})

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
