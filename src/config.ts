import { Config, TypeCheckerConfig } from './types'
//_______________________________________________________
//
export const defaultConfig: Config = {
  targetDir: '.',
  tsconfigFileName: 'tsconfig.json',
  isEmitLog: false,
  regExpChecker: {
    boolean: /.*$/,
    number: /.*$/,
    string: /.*$/,
    array: /.*$/
  }
}
export const createConfig = (injects?: TypeCheckerConfig): Config => ({
  ...defaultConfig,
  ...injects,
  regExpChecker: {
    ...defaultConfig.regExpChecker,
    ...injects?.regExpChecker
  }
})
