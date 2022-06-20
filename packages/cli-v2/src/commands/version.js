const chalk = require('chalk')

console.log(
    chalk.hex('#e55d3b').bold(`📦 v${require('../../package.json').version}`)
)
