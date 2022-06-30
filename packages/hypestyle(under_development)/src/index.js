#!/usr/bin/env node

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Hypll. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *--------------------------------------------------------------------------------------------*/

// Other imports
const chalk = require('chalk')
const { colors } = require('./colors')

// Commander.js
const { Command } = require('commander')
const program = new Command()

program
    .name('Hypestyle CLI')
    .description('The CLI for hypestyle CSS')
    .version(require('../package.json').version)
    .on('command:*', function () {
        console.error(
            chalk.red(`Invalid command: ${chalk.gray(program.args.join(' '))}`)
        )
        console.error(
            chalk.hex(colors.info)(
                `Use ${chalk.cyan(
                    '$ hypestyle help'
                )} for a list of available commands.`
            )
        )
        process.exit(1)
    })

// commands

program
    // Init Command
    .command('init')
    .description('Initialize a new hypestyle config file.')
    .action(() => {
        require('./commands/init')
    })

program
    .command('build')
    .description('Build the CSS file.')
    .action(() => {
        require('./commands/build')
    })

program.parse()
