const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner
const cssmin = require('cssmin')

function build() {
    const time = Date.now()
    const spinner = new Spinner(chalk.blueBright('🔨 Building... \n\n'))
    spinner.setSpinnerString('|/-\\')
    spinner.start()

    const configFile = path.join(process.cwd(), 'hypestyle.config.js')

    if (!fs.existsSync(configFile)) {
        console.log(chalk.redBright('Config file was not found.')),
            console.log(
                chalk.yellowBright(
                    'Run `hypestyle init` to create a config file.'
                )
            ),
            console.log(`Failed after: ${chalk.gray(Date.now() - time + 'ms')}`)
        spinner.stop(true), process.exit(1)
    }

    const config = require(configFile)
    const fileComment = path.join(__dirname, '../templates/fileComment.txt')
    const settings = config.settings

    try {
        let createColor = Object.keys(config.configs.colors)
            .map((color) => {
                return `.text-${color} { color: ${config.configs.colors[color]}; }
           \n.bg-${color} { background-color: ${config.configs.colors[color]}; }\n`
            })
            .join('')

        let finalCSS =
            fs.readFileSync(fileComment, 'utf8') + cssmin(`${createColor}`)

        fs.writeSync(path.join(settings.outDir, settings.outFile), finalCSS)

        spinner.stop(true)
        console.log(
            chalk.green('\n✅ | Successfully builded your config file!')
        )
        console.log(
            chalk.cyanBright('⏰ | Done in: ') +
                chalk.blackBright(`${Date.now() - time}ms`)
        )
    } catch (e) {
        console.log(chalk.redBright(`Error: ${chalk.gray(e.message)}`))
        console.log(`Failed after: ${chalk.gray(Date.now() - time + 'ms')}`)
        spinner.stop(true), process.exit(1)
    }
}

build()
