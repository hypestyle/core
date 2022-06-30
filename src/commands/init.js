const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

function init() {
    const time = Date.now()
    const configFile = path.join(process.cwd(), 'hypestyle.config.js')
    const configFilePath = path.join(
        __dirname,
        '../templates/hypestyle.config.js'
    )
    const configFileContent = fs.readFileSync(configFilePath, 'utf-8')

    fs.writeFileSync(configFile, configFileContent)

    console.log(
        chalk.green('✅ | Successfully created config file!\n') +
            chalk.cyanBright('⏰ | Done in: ') +
            chalk.gray(`${Date.now() - time}ms \n`) +
            chalk.cyanBright('🔨 | To compile your config file run: \n') +
            chalk.gray('$ hypestyle build (--watch)')
    )
}

init()
