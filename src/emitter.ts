import * as path from 'path'
import * as fs from 'fs-extra'
import { TypeCheckDiagnostics } from './types'
import { Config } from './types'
// ______________________________________________________
//
export function emitter(diagnostics: TypeCheckDiagnostics, config: Config) {
  if (!config.logFileName && !config.isEmitLog) return
  const logFileName = config.logFileName || 'wordcop.log'
  const distDirArr = logFileName.split('/')
  distDirArr.pop()
  const distDir = distDirArr.join('/')
  try {
    if (distDir !== '') {
      if (!fs.existsSync(distDir)) {
        fs.mkdirsSync(distDir)
      }
    }
    fs.writeFileSync(path.resolve(logFileName), JSON.stringify(diagnostics), {
      encoding: 'utf-8'
    })
  } catch (err) {
    throw new Error(`wordcop: Error! Failed emit log file.`)
  }
}
