#!/usr/bin/env node
import { Command } from 'commander'

const program = new Command()

program
  .command('changelog')
  .option('-rc --releaseCount <releaseCount>', 'Release count')
  .option('-f --file <file>', 'Changelog filename')
  .description('Generate changelog')
  .action(() => {
    // eslint-disable-next-line no-console
    console.log(11111111)
  })

program.parse()
