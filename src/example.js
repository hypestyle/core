#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

process.argv.forEach((cmd) => {
    if (cmd === 'build') {
        const files = fs
            .readdirSync('./tests')
            .filter((file) => file.endsWith('.html'))

        const contents = files.map((file) => {
            return fs.readFileSync(`./tests/${file}`, 'utf8')
        })

        const cssFile = fs.readFileSync('./tests/hypestyle@0.1.9.css', 'utf8')

        const classes = contents
            .map((content) => {
                const regex = /class="([^"]+)"/g
                const matches = content.match(regex)
                return matches.map((match) => match.replace(regex, '$1'))
            })
            .reduce((acc, curr) => {
                return acc.concat(curr)
            }, [])

        classes.forEach((className) => {
            if (cssFile.includes(className)) {
                console.log(chalk.green.bold(className))

                const regex = new RegExp(`\\.${className}\\s*{([^}]+)}`, 'g')
                const matches = cssFile.match(regex)
                if (matches) {
                    matches.forEach((match) => {
                        console.log(chalk.yellow(match))

                        const output = path.join('./tests', `outPut.css`)

                        fs.appendFileSync(output, match)
                    })
                }
            }
        })
    } else if (cmd === '--watch') {
        console.log(chalk.hex('#e55d3b').bold('Watching for changes...'))

        const watcher = require('chokidar').watch('./tests', {
            ignored: /(^|[\/\\])\../,
            persistent: true,
        })

        watcher.on('change', (path) => {
            console.log(`File ${path} has been changed`)

            // run script
            require('child_process').exec(
                `pnpm run test build --watch`,
                (err, stdout, stderr) => {
                    if (err) {
                        console.log(err)
                    }
                    console.log(stdout)
                }
            )
        })
    }
})
