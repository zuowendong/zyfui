import chalk from 'chalk'
import ora from 'ora'

import { removeDir } from './removeBundle'

export const logger = {
  info(text: string) {
    // eslint-disable-next-line no-console
    console.log(text)
  },
  success(text: string) {
    // eslint-disable-next-line no-console
    console.log(chalk.hex('#00c48f')(text))
  },
  warning(text: string) {
    // eslint-disable-next-line no-console
    console.log(chalk.hex('#ff9800')(text))
  },
  error(text: string) {
    // eslint-disable-next-line no-console
    console.log(chalk.hex('#f44336')(text))
  },
  title(text: string) {
    // eslint-disable-next-line no-console
    console.log(chalk.cyan(text))
  },
}

export const runTask = async(taskName: string, taskFun: () => any) => {
  const spinner = ora().start(`Compiling ${taskName}...`)
  try {
    await taskFun()
    spinner.succeed(`${taskName} completed!`)
  }
  catch (error) {
    spinner.fail(`${taskName} failed!`)
    logger.error(error.toString())
  }
}

const compile = async() => {
  await removeDir()
}

compile()
