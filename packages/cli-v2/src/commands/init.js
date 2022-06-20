const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

function init() {
    console.log(
        chalk.green('✅ | Successfully created config file!\n\n') +
            chalk.cyanBright('⚙️ | To compile your config file run: \n') +
            chalk.blackBright('$ hypestyle build')
    )

    fs.writeFileSync(
        path.join(process.cwd(), 'hypestyle.config.js'),
        fs.readFileSync(
            path.join(__dirname, '../templates/hypestyle.config.js'),
            'utf8'
        )
    )
}

init()
