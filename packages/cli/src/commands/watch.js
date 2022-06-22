const chokidar = require('chokidar')
const chalk = require('chalk')
const path = require('path')

const configFile = path.join(process.cwd(), 'hypestyle.config.js')

console.log(chalk.hex('#e55d3b').bold('📦 | Watching for changes...'))

const watcher = chokidar.watch(configFile, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
})

watcher.on('change', (file) => {
    console.log(
        chalk.hex('#e55d3b')(
            `📦 | File ${file} has been changed, rebuilding...`
        )
    )

    // run a npm script
    require('child_process').execSync(`hypestyle build --watch`, {
        stdio: 'inherit',
    })
})
