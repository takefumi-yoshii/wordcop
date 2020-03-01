import * as ts from 'typescript'
import { Diagnostic, TypeRegExpChecker } from './types'
import { visitSource } from './visitSource'
// ______________________________________________________
//
export function getTypeCheckDiagnostics(
  checker: ts.TypeChecker,
  typeRegExpChecker: TypeRegExpChecker,
  sources: readonly ts.SourceFile[]
) {
  const allDiagnostics: Diagnostic[] = sources
    .map(source => {
      const { diagnostics } = visitSource(checker, typeRegExpChecker, source)
      return diagnostics
    })
    .flat()
  return {
    allDiagnostics
  }
}
