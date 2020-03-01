import { Config, TypeCheckerConfig } from './types'
//_______________________________________________________
//
export const defaultConfig: Config = {
  errorThrethold: 0,
  targetDir: '.',
  tsconfigFileName: 'tsconfig.json',
  isEmitLog: false
}
export const createConfig = (injects?: TypeCheckerConfig): Config => ({
  ...defaultConfig,
  ...injects
})
