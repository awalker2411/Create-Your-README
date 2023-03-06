const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown`);

const questions = [
    {
        message: 'What is the title of your project?',
        type: 'input',
        name: 'title'
    },

    {
        message: 'Please describe your project.',
        type: 'input',
        name: 'description'
    },

    
    {
        message: 'Are there any required installations for your project?',
        type: 'input',
        name: 'installation'
    },

    {
        message: 'What are the usage steps for your project?',
        type: 'input',
        name: 'usage'
    },
    
    {
        message: 'What are the tests for your project?',
        type: 'input',
        name: 'tests'
    },
    
    {
        message: 'What is the URL for your deployed application?',
        type: 'input',
        name: 'URL'
    },

    {
        message: 'Who are the contributors to your project?',
        type: 'input',
        name: 'credits'
    },
    
    {
        message: 'What is your Github Username?',
        type: 'input',
        name: 'gitUser'
    },
    
    {
        message: 'What is your email address?',
        type: 'input',
        name: 'email'
    },
    
    {
        message: 'What is the license of your project?',
        type: 'list',
        listItems: [
            'Mozilla',
            'GNU',
            'MIT',
            'Apache',
            'BSD',
            'No License',
        ],
        name: 'license'
    }
]


function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
    fs.writeFileSync(fileName, content);
}



function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown(answers))  
    });
}



init();