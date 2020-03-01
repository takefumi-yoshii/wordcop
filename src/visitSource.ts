import * as ts from 'typescript'
import { Diagnostic, TypeRegExpChecker } from './types'
import { checkNode } from './checkNode'
import { getDiagnostic } from './getDiagnostic'
// ______________________________________________________
//
export function visitSource(
  checker: ts.TypeChecker,
  typeRegExpChecker: TypeRegExpChecker,
  source: ts.SourceFile
) {
  const diagnostics: Diagnostic[] = []
  function visit(node: ts.Node) {
    switch (node.kind) {
      case ts.SyntaxKind.VariableDeclaration:
        if (ts.isVariableDeclaration(node)) {
          const erorrMessage = checkNode(checker, typeRegExpChecker, node)
          if (erorrMessage) {
            const diagnostic = getDiagnostic(source, node, erorrMessage)
            console.log(diagnostic)
            diagnostics.push(diagnostic)
          }
        }
        break
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return {
    diagnostics
  }
}
