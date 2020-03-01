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
    const checkByFunction = typeRegExpChecker[flags]
    if (!checkByFunction) return false
    const identifier = node.name.getText()
    if (typeof checkByFunction === 'function') {
      const isArrayTypeNode = symbol.name === 'Array'
      return checkByFunction(identifier, isArrayTypeNode, node)
    }
    return checkByRegExp(identifier, checkByFunction)
  } catch {
    return false
  }
}
