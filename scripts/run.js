const runCmd = require('child_process').execSync
const inquirer = require('inquirer')
const chalk = require('chalk')

let questions = [
    {
        type: 'input',
        name: 'cmdToRun',
        message: 'What command would you like to run?',
        default: 'pnpm cli',
    },
]

inquirer.prompt(questions).then((answers) => {
    console.log(chalk.green(`Running ${answers.cmdToRun}`))
    runCmd(`pnpm run cli ${answers.cmdToRun}`, { stdio: 'inherit' })
})
