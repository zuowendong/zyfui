#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var program = new commander_1.Command();
program
    .command('changelog')
    .option('-rc --releaseCount <releaseCount>', 'Release count')
    .option('-f --file <file>', 'Changelog filename')
    .description('Generate changelog')
    .action(function () {
    // eslint-disable-next-line no-console
    console.log(11111111);
});
program.parse();
