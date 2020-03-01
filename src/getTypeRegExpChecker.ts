import * as ts from 'typescript'
import { RegExpChecker, TypeRegExpChecker } from './types'
// ______________________________________________________
//
export const getTypeRegExpChecker = (
  regExpChecker: RegExpChecker
): TypeRegExpChecker => ({
  [ts.TypeFlags.Object]: (identifier, isArrayTypeNode) => {
    if (!isArrayTypeNode) return false
    const res = identifier.match(regExpChecker.array)
    if (res) return false
    return ` ${regExpChecker.array}`
  },
  [ts.TypeFlags.Boolean]: regExpChecker.boolean,
  [ts.TypeFlags.Number]: regExpChecker.number,
  [ts.TypeFlags.String]: regExpChecker.string,
  [ts.TypeFlags.BooleanLiteral]: regExpChecker.boolean,
  [ts.TypeFlags.NumberLiteral]: regExpChecker.number,
  [ts.TypeFlags.StringLiteral]: regExpChecker.string
})
