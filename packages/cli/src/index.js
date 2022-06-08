#!/usr/bin/env node
const inquirer = require('inquirer')
const fs = require('fs')
const chalkAnimation = require('chalk-animation')
const fse = require('fs-extra')
const chalk = require('chalk')

const CHOICES = fs.readdirSync(`${__dirname}/templates`)

console.log()
console.log(
    `${chalk.greenBright('🌿 Welcome to hypestyle cli!')} ${chalk.redBright(
        'Lets get you started!'
    )}`
)
console.log()

const QUESTIONS = [
    {
        name: 'project-choice',
        type: 'list',
        message: 'What project would you like to create?',
        choices: CHOICES,
    },
    {
        name: 'project-name',
        type: 'input',
        message: 'What is the name of your project?',
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
            else
                return 'Project name may only include letters, numbers, underscores and hashes.'
        },
    },
]

const CURR_DIR = process.cwd()

inquirer.prompt(QUESTIONS).then((answers) => {
    const projectChoice = answers['project-choice']
    const projectName = answers['project-name']

    const templatePath = `${__dirname}/templates/${projectChoice}`

    fs.mkdirSync(`${CURR_DIR}/${projectName}`)

    createDirectoryContents(templatePath, projectName)

    console.log()
    console.log(`Done! Now run:`)
    console.log()
    console.log(`cd ${chalk.redBright(projectName)}`)
    console.log(`npm run ${chalk.blueBright('dev')}`)
    console.log()
    console.log(`${chalk.greenBright('Happy coding!')}`)
})

function createDirectoryContents(templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath)

    filesToCreate.forEach((file) => {
        const origFilePath = `${templatePath}/${file}`

        // get stats about the current file
        const stats = fs.statSync(origFilePath)

        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8')

            const writePath = `${CURR_DIR}/${newProjectPath}/${file}`
            fs.writeFileSync(writePath, contents, 'utf8')
        }
    })
}

const stats = fs.statSync(`${__dirname}/templates`)

if (stats.isFile()) {
    const contents = fs.readFileSync(origFilePath, 'utf8')

    // Rename
    if (file === '.npmignore') file = '.gitignore'

    // get folders in all templates

    const writePath = `${CURR_DIR}/${newProjectPath}/${file}/${folder} `
    fs.writeFileSync(writePath, contents, 'utf8')
}
