import { TypeCheckDiagnostics } from './types'
import { Config } from './types'
// ______________________________________________________
//
export function reporter(diagnostics: TypeCheckDiagnostics, config: Config) {
  if (!!config.customReporter) {
    config.customReporter(diagnostics)
    return
  }
}
