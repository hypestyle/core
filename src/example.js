#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

process.argv.forEach((cmd) => {
    if (cmd === 'build') {
        const files = fs
            .readdirSync('./')
            .filter((file) => file.endsWith('.html'))

        const contents = files.map((file) => {
            return fs.readFileSync(`./${file}`, 'utf8')
        })

        const cssFile = fs.readFileSync(
            './lib/dist/css/hypestyle.min.css',
            'utf8'
        )

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

                        const output = path.join('./', `preBuild.css`)

                        fs.appendFileSync(output, match)
                    })
                }
            }
        })
    }
})
