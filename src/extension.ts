// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "my-first-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	// Demo 1: Basic Hello World Command
	const disposable = vscode.commands.registerCommand('my-first-extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from my-first-extension!');
	});

	context.subscriptions.push(disposable);
	
	// Demo 2: User Parameter Input
	const inputCommand = vscode.commands.registerCommand('my-first-extension.inputParameter', async () => {
		const value = await vscode.window.showInputBox({
			prompt: 'Please enter a parameter'
		});

		if (value) {
			vscode.window.showInformationMessage(`You entered: ${value}`);
		}
	});

	context.subscriptions.push(inputCommand);
	
	// Demo 3: Parameter Selection with Quick Pick
	const selectCommand = vscode.commands.registerCommand('my-first-extension.selectEnvironment', async () => {
		const environment = await vscode.window.showQuickPick(
			['Development', 'Testing', 'Production'],
			{
				placeHolder: 'Select an environment'
			}
		);

		if (environment) {
			vscode.window.showInformationMessage(`Selected environment: ${environment}`);
		}
	});

	context.subscriptions.push(selectCommand);
}

// This method is called when your extension is deactivated
export function deactivate() { }
