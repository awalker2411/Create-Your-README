const inquirer = require ('inquirer');
const fs = require('fs');

const prompts = [
    {
        prompt: 'What is the title of your project?',
        type: 'input',
        name: 'title'
    },

    {
        prompt: 'Please describe your project.',
        type: 'input',
        name: 'description'
    },

    
    {
        prompt: 'Are there any required installations for your project?',
        type: 'input',
        name: 'installation'
    },

    {
        prompt: 'What are the usage steps for your project?',
        type: 'input',
        name: 'usage'
    },
    
    {
        prompt: 'What are the tests for your project?',
        type: 'input',
        name: 'tests'
    },
    
    {
        prompt: 'What is the URL for your deployed application?',
        type: 'input',
        name: 'URL'
    },

    {
        prompt: 'Who are the contributors to your project?',
        type: 'input',
        name: 'credits'
    },
    
    {
        prompt: 'What is your Github Username?',
        type: 'input',
        name: 'gitUser'
    },
    
    {
        prompt: 'What is your email address?',
        type: 'input',
        name: 'email'
    },
    
    {
        prompt: 'What is the license of your project?',
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
];