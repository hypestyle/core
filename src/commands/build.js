/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Hypll. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('fs')
const path = require('path')
const minify = require('cssmin')
const { colors } = require('../colors')
const chalk = require('chalk')

const configFile = path.join(process.cwd(), 'hypestyle.config.js')
const cssClasses = fs.readFileSync(
    path.join(process.cwd(), 'src/lib/dist/css/hypestyle.min.css'),
    'utf8'
)

if (!fs.existsSync(configFile)) {
    console.error(
        chalk.red(
            `No ${chalk.gray('config file')} found in the current directory.`
        )
    )
    process.exit(1)
}

const filesFromConfigFile = require(configFile).settings.files

const files = fs
    .readdirSync(require(configFile).settings.outDir || './')

    .filter((file) => filesFromConfigFile.some((ext) => file.endsWith(ext)))
    .map((file) =>
        path.join(
            process.cwd(),
            require(configFile).settings.outDir || './',
            file
        )
    )

const contents = files.map((file) => fs.readFileSync(file, 'utf8'))

class classConfig {
    constructor(classes) {
        this.classes = classes
    }

    splitClasses() {
        return this.classes.map((className) => {
            return className.split(' ')
        })
    }
}

const classes = contents
    .map((content) => {
        const regex = /class="([^"]+)"/g
        const matches = content.match(regex)
        return matches.map((match) => match.replace(regex, '$1'))
    })
    .reduce((acc, curr) => {
        return acc.concat(curr)
    }, [])

const splitClasses = new classConfig(classes)
    .splitClasses()

    .reduce((acc, curr) => {
        return acc.concat(curr)
    }, [])

splitClasses.forEach((className) => {
    if (cssClasses.includes(className)) {
        const regex = new RegExp(`\\.${className}\\s*{([^}]+)}`, 'g')
        const matches = cssClasses.match(regex)
        if (matches) {
            matches.forEach((match) => {
                // if the matches already exists, we don't need to add it again
                if (!acc.includes(match)) {
                    acc.push(match)
                }

                fs.appendFileSync(
                    path.join(
                        process.cwd(),
                        require(configFile).settings.outDir || './',
                        require(configFile).settings.outFile ||
                            'hypestyle.build.css'
                    ),
                    match
                )
            })
        }
    }
})
