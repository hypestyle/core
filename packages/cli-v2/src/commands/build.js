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
                return `.text-${color} { color: ${config.configs.colors[color]} !important; }
           \n.bg-${color} { background-color: ${config.configs.colors[color]} !important; }\n`
            })
            .join('')

        let { margin, padding } = config.configs.utils

        let createUtilsMargin = Object.keys(margin)
            .map((key) => {
                return Object.keys(margin[key])

                    .map((subKey) => {
                        return `.m-${subKey} { margin-${key}: ${margin[key][subKey]} !important; }\n`
                    })
                    .join('')
            })
            .join('')

        let createUtilsPadding = Object.keys(padding)
            .map((key) => {
                return Object.keys(padding[key])

                    .map((subKey) => {
                        return `.p-${subKey} { padding-${key}: ${padding[key][subKey]} !important; }\n`
                    })
                    .join('')
            })
            .join('')

        let createUtilsFontFamily = Object.keys(config.configs.utils.fontFamily)
            .map((key) => {
                return `.ff-${key} { font-family: ${config.configs.utils.fontFamily[key]} !important; }\n`
            })
            .join('')

        let finalCSS =
            fs.readFileSync(fileComment, 'utf-8') +
            cssmin(
                `${createColor}${createUtilsMargin}${createUtilsPadding}${createUtilsFontFamily}`
            )

        fs.writeFileSync(
            path.join(
                config.settings.outDir || './',
                config.settings.outFile || 'hypestyle.config.css'
            ),
            finalCSS
        )

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
