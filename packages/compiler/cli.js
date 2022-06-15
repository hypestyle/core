#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner
const AsciiTable = require('ascii-table')
const chokidar = require('chokidar')

process.argv.forEach((arg) => {
    if (arg === '--init') {
        const configFile = path.join(process.cwd(), 'hypestyle.config.js')

        const config = `module.exports = {
       // The output directory for your compiled config file.
        outDir: "",
        // The name of your output css file
        fileName: "hypestyle.config.css", // default: hypestyle.config.css


        // Customize colors
        colors: {
          primary: "#0070f3",
        },

        // Customize utilities classes
        utils: {
            margin: {
                1: "0.75rem",
                // You can also give custom names like: custom: "0.75rem"
            },
            marginBottom: {},
            marginTop: {},
            padding: {
                1: "0.75rem",
                // You can also give custom names like: custom: "0.75rem"
            },
            paddingBottom: {},
            paddingTop: {},
            fontFamily: {
                sans: "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
            }

        }
      };
      `
        fs.writeFileSync(configFile, config)
        console.log(
            chalk.green('✅ | Successfully created config file!\n\n') +
                chalk.cyanBright('⚙️ | To compile your config file run: \n') +
                chalk.blackBright('$ hypestyle --run')
        )
    } else if (arg === '--run') {
        const configFile = path.join(process.cwd(), 'hypestyle.config.js')

        if (!fs.existsSync(configFile)) {
            console.log(chalk.red(' | No config file found!'))
            process.exit(1)
        }

        const colors = require(configFile).colors
        const outDir = require(configFile).outDir
        const fileName = require(configFile).fileName
        const utilsMargin = require(configFile).utils.margin
        const utilsPadding = require(configFile).utils.padding
        const utilsPaddingBottom = require(configFile).utils.paddingBottom
        const utilsPaddingTop = require(configFile).utils.paddingTop
        const utilsMarginBottom = require(configFile).utils.marginBottom
        const utilsMarginTop = require(configFile).utils.marginTop
        const utilsFontFamily = require(configFile).utils.fontFamily

        const cssFile = path.join(
            process.cwd(),
            fileName || 'hypestyle.config.css'
        )

        const spinner = new Spinner('🔃 | Generating CSS...')
        spinner.start()

        const startTime = Date.now()

        setTimeout(() => {
            try {
                const fileComment = `/*
 - HypeStyle CSS v0.1.9 (https://hypestyle.netlify.app)
 - Copyright 2022 Hypll Development. / HypeStyle LABS
 - Licensed under MIT (https://github.com/hypestyle/hypestyle/blob/master/LICENSE)
*/`

                // The color compiler
                const color = Object.keys(colors)
                    .map(
                        (key) =>
                            `.text-${key} { color: ${colors[key]} !important; }\n.bg-${key} { background-color: ${colors[key]} !important; }`
                    )
                    .join('\n')

                // The margin compiler
                const margin = Object.keys(utilsMargin)
                    .map(
                        (key) =>
                            `.m-${key} { margin: ${utilsMargin[key]} !important; }`
                    )
                    .join('\n')

                // The padding compiler
                const padding = Object.keys(utilsPadding)

                    .map(
                        (key) =>
                            `.p-${key} { padding: ${utilsPadding[key]} !important; }`
                    )
                    .join('\n')

                // The padding bottom compiler
                const paddingBottom = Object.keys(utilsPaddingBottom)
                    .map(
                        (key) =>
                            `.pb-${key} { padding-bottom: ${utilsPaddingBottom[key]} !important; }`
                    )
                    .join('\n')

                // The padding top compiler
                const paddingTop = Object.keys(utilsPaddingTop)
                    .map(
                        (key) =>
                            `.pt-${key} { padding-top: ${utilsPaddingTop[key]} !important; }`
                    )
                    .join('\n')

                // The marginTop top compiler
                const marginTop = Object.keys(utilsMarginTop)
                    .map(
                        (key) =>
                            `.mb-${key} { padding-top: ${utilsMarginTop[key]} !important; }`
                    )
                    .join('\n')

                // The marginBottom bottom compiler
                const marginBottom = Object.keys(utilsMarginBottom)
                    .map(
                        (key) =>
                            `.mt-${key} { padding-bottom: ${utilsMarginBottom[key]} !important; }`
                    )
                    .join('\n')

                // The fontFamily compiler
                const fontFamily = Object.keys(utilsFontFamily)
                    .map(
                        (key) =>
                            `.ff-${key} { font-family: ${utilsFontFamily[key]} !important; }`
                    )
                    .join('\n')

                // The margin bottom compiler

                // The final CSS
                const css = `${fileComment}\n${color}\n${margin}\n${padding}\n${fontFamily}\n${paddingBottom}\n${paddingTop}\n${marginTop}\n${marginBottom}`

                // Write the CSS file
                if (outDir) {
                    fs.writeFileSync(
                        path.join(outDir, filename || 'hypestyle.config.css'),
                        css
                    )
                } else {
                    fs.writeFileSync(cssFile, css)
                }

                spinner.stop(true)

                console.log(chalk.green('\n✅ | Successfully generated CSS!'))
                console.log(
                    chalk.cyanBright('⏰ | Done in: ') +
                        chalk.blackBright(`${Date.now() - startTime}ms`)
                )
            } catch (error) {
                console.log(chalk.red('\n\n | Error: ' + error.message))
                process.exit(1)
            }
        }, 600)
    } else if (arg === '--version') {
        const pathToPackage = path.join(process.cwd(), 'package.json')

        if (!fs.existsSync(pathToPackage)) {
            console.log(chalk.red('\n\nNo package.json found!'))
            process.exit(1)
        }

        console.log(chalk.yellowBright(`v${require(pathToPackage).version}`))
    } else if (arg === '--help') {
        const table = new AsciiTable(chalk.yellowBright('HypeStyle Compiler'))

        table.setHeading('Command', 'Description')
        table.addRow('--init', 'Initialize a config file')
        table.addRow('--run', 'Compile your config file')
        table.addRow('--version', 'Show the version')
        table.addRow('--help', 'Show this help')

        console.log(table.toString())
    } else if (arg === '--watch') {
        console.log(chalk.hex('#f368e0')('Watching for changes...'))

        chokidar
            .watch(path.join(process.cwd(), 'hypestyle.config.js'), {
                ignored: /(^|[\/\\])\../,
                persistent: true,
                ignoreInitial: true,
            })
            .on('change', () => {
                console.log(
                    chalk.greenBright('\n\nConfig file changed, recompiling...')
                )

                // update the css file
                const configFile = path.join(
                    process.cwd(),
                    'hypestyle.config.js'
                )

                const colors = require(configFile).colors
                const outDir = require(configFile).outDir
                const utilsMargin = require(configFile).utils.margin
                const utilsPadding = require(configFile).utils.padding

                const cssFile = path.join(process.cwd(), 'hypestyle.config.css')

                const spinner = new Spinner('🔃 | Generating CSS...')
                spinner.start()

                const startTime = Date.now()

                setTimeout(() => {
                    try {
                        const fileComment = `/*
     - HypeStyle CSS v0.1.9 (https://hypestyle.netlify.app)
     - Copyright 2022 Hypll Development. / HypeStyle LABS
     - Licensed under MIT (https://github.com/hypestyle/hypestyle/blob/master/LICENSE)
    */`

                        // The color compiler
                        const color = Object.keys(colors)
                            .map(
                                (key) =>
                                    `.text-${key} { color: ${colors[key]} !important; }\n.bg-${key} { background-color: ${colors[key]} !important; }`
                            )
                            .join('\n')

                        // The margin compiler
                        const margin = Object.keys(utilsMargin)

                            .map(
                                (key) =>
                                    `.m-${key} { margin: ${utilsMargin[key]} !important; }`
                            )
                            .join('\n')

                        // The padding compiler
                        const padding = Object.keys(utilsPadding)

                            .map(
                                (key) =>
                                    `.p-${key} { padding: ${utilsPadding[key]} !important; }`
                            )
                            .join('\n')

                        // The final CSS
                        const css = `${fileComment}\n${color}\n${margin}\n${padding}`

                        // Write the CSS file
                        if (outDir) {
                            fs.writeFileSync(
                                path.join(outDir, 'hypestyle.config.css'),
                                css
                            )
                        } else {
                            fs.writeFileSync(cssFile, css)
                        }

                        spinner.stop(true)
                    } catch (error) {
                        console.log(chalk.red('\n\n | Error: ' + error.message))
                        process.exit(1)
                    }
                }, 600)
            })
    }
})
