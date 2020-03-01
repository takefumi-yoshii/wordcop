import { TypeCheckDiagnostics } from './types'
// ______________________________________________________
//
export function result(diagnostics: TypeCheckDiagnostics) {
  if (diagnostics.allDiagnostics.length) {
    throw new Error('🚨 wordcop: Error! Found violation.🚨')
  }
  console.log('wordcop: No violations found. ✅')
}
