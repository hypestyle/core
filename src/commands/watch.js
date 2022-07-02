/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Hypll. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')

const configFile = path.join(process.cwd(), 'hypestyle.config.js')

const filesToWatch = require(configFile).settings.files
const outDir = require(configFile).settings.outDir || './'

const watcher = chokidar.watch(configFile, {
    cwd: process.cwd(),
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true,
})

watcher.on('change', (file) => {
    console.log(`Files ${file} has changed!`)
})
