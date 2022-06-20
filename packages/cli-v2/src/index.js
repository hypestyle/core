#!/usr/bin/env node

process.argv.forEach((cmd) => {
    if (cmd === 'help') {
        require('./commands/help')
    } else if (cmd == 'init') {
        require('./commands/init')
    } else if (cmd == 'build') {
        require('./commands/build')
    }
})
