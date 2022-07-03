/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Hypll. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')
const chalk = require('chalk')
const { colors } = require('../colors')

const configFile = path.join(process.cwd(), 'hypestyle.config.js')

console.log(chalk.hex(colors.orange)('Watching changes...'))

// fs watch html files
fs.watch
    .apply(fs, [
        path.join(process.cwd(), require(configFile).settings.outDir),
        {
            recursive: true,
            ignoreInitial: true,
        },
    ])
    .on('change', (event, file) => {
        if (file.endsWith('.html')) {
            console.log(
                chalk.cyanBright(file),
                `${chalk.gray('was changed, rebuilding CSS file...')}`
            )

            require('child_process').execSync(`pnpm run build watch`)
        }
    })
    .on('error', (error) => {
        console.error(chalk.red(error))
    })
