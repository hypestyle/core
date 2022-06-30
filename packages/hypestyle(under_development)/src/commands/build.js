/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Hypll. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('fs')
const path = require('path')
const minify = require('cssmin')
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
