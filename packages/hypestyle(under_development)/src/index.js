#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()

program
    .name('Hypestyle CLI')
    .description('The CLI for hypestyle CSS')
    .version(require('../package.json').version)

// commands

let commands = [
    {
        name: 'init',
        description: 'Initialize a new hypestyle config file.',
        action: require('./commands/init'),
    },

    {
        name: 'build',
        description: 'Build your classes/config file.',
        action: require('./commands/build'),
    },
]

// foreach command
commands.forEach((command) => {
    program
        .command(command.name)
        .description(command.description)
        .action(() => {
            command.action
        })
})

// program
//     .command('init')
//     .description('Initialize a new hypestyle config file.')
//     .action(() => {
//         require('./commands/init')
//     })

program.parse()
