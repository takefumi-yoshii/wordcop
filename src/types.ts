import * as ts from 'typescript'
import { getTypeCheckDiagnostics } from './getTypeCheckDiagnostics'
// ______________________________________________________
//
export type Diagnostic = string
export type BindingFunction<T extends ts.Node = ts.Node> = (props: {
  checker: ts.TypeChecker
  source: ts.SourceFile
  node: T
  name: string
}) => Diagnostic | undefined
//_______________________________________________________
//
export type TypeCheckDiagnostics = ReturnType<typeof getTypeCheckDiagnostics>
//_______________________________________________________
//
export type Config = {
  targetDir: string
  tsconfigFileName: string
  isEmitLog: boolean
  regExpChecker: RegExpChecker
  logFileName?: string
  customReporter?: (typeCheckDiagnostics: TypeCheckDiagnostics) => unknown
}
export type TypeCheckerConfig = Partial<Omit<Config, 'regExpChecker'>> & {
  regExpChecker?: Partial<RegExpChecker>
}
//_______________________________________________________
//
export type CheckMapKeys = 'boolean' | 'number' | 'string' | 'array'
export type RegExpChecker = { [K in CheckMapKeys]: RegExp }
export type CheckFunction = (
  identifier: string,
  isArrayTypeNode: boolean,
  node: ts.VariableDeclaration
) => string | false
export type TypeRegExpChecker = { [k: string]: RegExp | CheckFunction }
