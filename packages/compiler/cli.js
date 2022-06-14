#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner
const AsciiTable = require('ascii-table')
const cssMinify = require('css-minify')

process.argv.forEach((arg) => {
    if (arg === '--init') {
        const configFile = path.join(process.cwd(), 'hypestyle.config.js')

        const config = `module.exports = {
       // The output directory for your compiled config file.
        outDir: "",


        // Customize colors
        colors: {
          primary: "#0070f3",
        },

        // Customize utilities classes
        utils: {
            margin: {
                1: "0.25rem",
            },

            padding: {
                1: "0.25rem",
            },
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
            console.log(chalk.red('⛔ | No config file found!'))
            process.exit(1)
        }

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

                console.log(chalk.green('\n✅ | Successfully generated CSS!'))
                console.log(
                    chalk.cyanBright('⏰ | Done in: ') +
                        chalk.blackBright(`${Date.now() - startTime}ms`)
                )
            } catch (error) {
                console.log(chalk.red('\n\n⛔ | Error: ' + error.message))
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
        const spinner = new Spinner('🌿 Watching for changes...')
        spinner.start()

        setTimeout(() => {
            console.log(
                chalk.redBright("\n\nThis command isn't supported yet!")
            )

            spinner.stop(true)
        }, 2000)
    }
})
