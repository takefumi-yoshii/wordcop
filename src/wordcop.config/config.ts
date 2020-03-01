import { TypeCheckDiagnostics, TypeCheckerConfig } from '../types'
const config: TypeCheckerConfig = {
  customReporter: (typeCheckDiagnostics: TypeCheckDiagnostics) => {
    console.log(typeCheckDiagnostics)
  }
}
export default config
