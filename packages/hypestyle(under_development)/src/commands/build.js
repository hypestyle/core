/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Hypll. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('fs')
const path = require('path')
const minify = require('cssmin')
const { colors } = require('../colors')
const chalk = require('chalk')
const { promisify } = require('util')

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

const filesContents = files.map((file) => fs.readFileSync(file, 'utf8'))

const classes = filesContents
    .map((content) => {
        const regex = /class="([^"]+)"/g
        const matches = content.match(regex)
        return matches.map((match) => match.replace(regex, '$1'))
    })
    .reduce((acc, curr) => {
        return acc.concat(curr)
    }, [])

classes.forEach((className) => {
    const regex = new RegExp(`\\.${className}\\s*{([^}]+)}`, 'g')
    const matches = cssClasses.match(regex)

    if (matches) {
        matches.forEach((match) => {
            console.log(chalk.yellowBright(`${match}`))
        })
    } else {
        console.log(chalk.red(`No CSS found for ${className}`))
    }
})
