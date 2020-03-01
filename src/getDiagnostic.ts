import * as ts from 'typescript'
import { Diagnostic } from './types'
// ______________________________________________________
//
export function getDiagnostic(
  source: ts.SourceFile,
  node: ts.Node,
  message: string
): Diagnostic {
  const start = node.getStart()
  const { line, character } = source.getLineAndCharacterOfPosition(start)
  const location = `${source.fileName}:${line + 1}:${character + 1}`
  const log = `${location} 👮‍♂️ < ${message}`
  return log
}
