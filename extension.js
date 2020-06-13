// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const extensionConfig = vscode.workspace.getConfiguration('lpp');
var nrc = require('child_process');
function compilePath(path){
	if(path.endsWith(".lpp")){
		console.log()
		var command = `java -jar "${extensionConfig.get("transpiler")}" "${path}"`;
		nrc.exec(command);
	}
}
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "LPP-pipeline" is now active!');

	vscode.workspace.onDidSaveTextDocument((textDocument)=>{
		
		compilePath(textDocument.fileName);
	});

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
