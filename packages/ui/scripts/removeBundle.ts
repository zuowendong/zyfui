import { remove } from 'fs-extra'
import { ES_DIR, LIB_DIR, UMD_DIR } from './tools'

export function removeDir() {
  return Promise.all([remove(ES_DIR), remove(LIB_DIR), remove(UMD_DIR)])
}

removeDir()
