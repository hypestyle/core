const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

function init() {
    const time = Date.now()
    const configFile = path.join(process.cwd(), 'hypestyle.config.js')
    const configFilePath =  path.join(__dirname, '../templates/hypestyle.config.js')
    const configFileContent = fs.readFileSync(configFilePath, 'utf-8')

   

    console.log(
        chalk.green('✅ | Successfully created config file!\n\n'))

    console.log(
        chalk.cyanBright('⏰ | Done in: ') +
            chalk.blackBright(`${Date.now() - time}ms`)
    )

    fs.writeFileSync(configFile, configFileContent)
   

}

init()
