/* eslint-disable no-console */
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import chalk from 'chalk'

export const __dirname = dirname(fileURLToPath(import.meta.url))
export const dir_path = (...args: string[]) => resolve(__dirname, ...args)
export const SRC_DIR = dir_path('../src')
export const ES_DIR = dir_path('../es')
export const LIB_DIR = dir_path('../lib')
export const UMD_DIR = dir_path('../dist')

export const logger = {
  info(text: string) {
    console.log(text)
  },
  success(text: string) {
    console.log(chalk.hex('#00c48f')(text))
  },
  warning(text: string) {
    console.log(chalk.hex('#ff9800')(text))
  },
  error(text: string) {
    console.log(chalk.hex('#f44336')(text))
  },
  title(text: string) {
    console.log(chalk.cyan(text))
  },
}
