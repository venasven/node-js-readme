// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const { prompt } = inquirer
// const generateMd = require('./generateReadme')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run test?',
        default: 'npm test',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If contributing is allowed, how does one contribute to the repo?',
        default: 'Fork the project and make a pull request with your new code',
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data)
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await prompt(questions)
    console.log(answers)
}

// Function call to initialize app
init();
