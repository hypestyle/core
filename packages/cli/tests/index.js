#!/usr/bin/env node

const fs = require('fs')

process.argv.forEach((cmd) => {
    if (cmd === 'build') {
        const files = fs
            .readdirSync('./tests')
            .filter((file) => file.endsWith('.html'))

        const contents = files.map((file) => {
            return fs.readFileSync(`./tests/${file}`, 'utf8')
        })

        const cssFile = fs.readFileSync('./tests/index.css', 'utf8')

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
                console.log(`${className} matches with the class with a class!`)
            } else {
                console.log(
                    `No classes match for ${className} in the css file.`
                )
            }
        })
    }
})
