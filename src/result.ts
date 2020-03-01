import { AnyDiagnostics } from './types'
import { Config } from './types'
// ______________________________________________________
//
export function result(diagnostics: AnyDiagnostics, config: Config) {
  if (diagnostics.aggregate.coverage < config.errorThrethold) {
    throw new Error(
      '🚨 wordcop: Error! TypeSafe coverage under threthold.🚨'
    )
  }
  console.log('wordcop: Your project is type safety. ✅')
}
