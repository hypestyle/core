#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner

process.argv.forEach((arg) => {
    if (arg === '--init') {
        const configFile = path.join(process.cwd(), 'hypestyle.config.js')

        const config = `module.exports = {
       // The output directory for your compiled config file.
        outDir: "",
       // The output file name for your compiled config file.
        outFile: "",

        // Customize colors
        colors: {
          primary: "#0070f3",
        },
      };
      `
        fs.writeFileSync(configFile, config)
        console.log(
            chalk.green('Successfully created config file!\n\n') +
                chalk.cyanBright('To compile your config file run: \n') +
                chalk.blackBright('$ hypestyle --run')
        )
    } else if (arg === '--run') {
        const configFile = path.join(process.cwd(), 'hypestyle.config.js')

        if (!fs.existsSync(configFile)) {
            console.log(chalk.red('No config file found!'))
            process.exit(1)
        }

        const colors = require(configFile).colors
        const outDir = require(configFile).outDir

        const cssFile = path.join(process.cwd(), 'hypestyle.config.css')

        const spinner = new Spinner('Generating CSS...')
        spinner.start()

        setTimeout(() => {
            try {
                const fileComment = `/*
 - HypeStyle CSS v0.1.9 (https://hypestyle.netlify.app)
 - Copyright 2022 Hypll Development. / HypeStyle LABS
 - Licensed under MIT (https://github.com/hypestyle/hypestyle/blob/master/LICENSE)
*/`
                const css = Object.keys(colors)
                    .map(
                        (key) =>
                            `.text-${key} { color: ${colors[key]} !important; }\n.bg-${key} { background-color: ${colors[key]} !important; }`
                    )
                    .join('\n')

                if (outDir) {
                    fs.writeFileSync(
                        path.join(outDir, 'hypestyle.config.css'),
                        `${fileComment}\n${css}`
                    )
                } else {
                    fs.writeFileSync(cssFile, `${fileComment}\n${css}`)
                }

                console.log(chalk.green('\n\nSuccessfully generated CSS!'))
            } catch (error) {
                console.log(chalk.red('\n\nError: ' + error))
                process.exit(1)
            }
        }, 2000)

        setTimeout(() => {
            spinner.stop(true)
        }, 2000)
    } else if (arg === '--version') {
        const pathToPackage = path.join(process.cwd(), 'package.json')

        if (!fs.existsSync(pathToPackage)) {
            console.log(chalk.red('\n\nNo package.json found!'))
            process.exit(1)
        }

        console.log(chalk.yellowBright(`v${require(pathToPackage).version}`))
    } else if (arg === '--help') {
        console.log(
            chalk.yellowBright(
                '🌿 Usage: hypestyle [--command]\n\n',
                '--init (create a config file)\n',
                '--run (compile CSS)\n',
                '--version (show version)\n',
                '--help (show help)'
            )
        )
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
