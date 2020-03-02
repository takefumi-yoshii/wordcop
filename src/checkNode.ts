import * as ts from 'typescript'
import { TypeRegExpChecker } from './types'
// ______________________________________________________
//
function checkByRegExp(identifier: string, reg: RegExp) {
  const res = identifier.match(reg)
  if (res) return false
  return ` ${reg}`
}
export function checkNode<T extends ts.VariableDeclaration>(
  checker: ts.TypeChecker,
  typeRegExpChecker: TypeRegExpChecker,
  node: T
) {
  try {
    const type = checker.getTypeAtLocation(node)
    const { flags, symbol } = type
    const check = typeRegExpChecker[flags]
    if (!check) return false
    const identifier = node.name.getText()
    if (typeof check === 'function') {
      const isArrayTypeNode = symbol.name === 'Array'
      return check(identifier, isArrayTypeNode, node)
    }
    return checkByRegExp(identifier, check)
  } catch {
    return false
  }
}
