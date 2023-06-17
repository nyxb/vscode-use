import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
   const insertUseClientDisposable = vscode.commands.registerCommand('use.insertUseClientStatement', () => {
      insertUseStatement('use client')
   })

   const insertUseServerDisposable = vscode.commands.registerCommand('use.insertUseServerStatement', () => {
      insertUseStatement('use server')
   })

   context.subscriptions.push(insertUseClientDisposable, insertUseServerDisposable)
}

function insertUseStatement(statement: string) {
   const editor = vscode.window.activeTextEditor
   if (editor) {
      const firstLine = editor.document.lineAt(0)
      editor.edit((editBuilder) => {
         editBuilder.insert(firstLine.range.start, `'${statement}'\n`)
      })
   }
}

export function deactivate() {

}
