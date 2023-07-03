// TODO: Include packages needed for this application
var inquirer = require('inquirer');

const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown');

inquirer.prompt([

    {
        type: "input",
        message: 'What is the title of the Project?',
        name: 'title',
    },

    {
        type: "input",
        message: 'Enter a description for the project:',
        name: 'description',
    },

    {
        type: "input",
        message: 'What installation instructions are needed for project?',
        name: 'installation',
    },

    {
        type: "input",
        message: 'What is the app used for?',
        name: 'usage',
    },

    {
        type: "input",
        message: 'What are the tests required?',
        name: 'test',
    },

    {
        type: "input",
        message: 'Contributor(s) GitHub accounts associated with this project?',
        name: 'contributors',
    },

    {
        type: "list",
        message: 'What license will be used?',
        name: 'license',
        choices: ['MIT', 'GNU'],
    },


    {
        type: "input",
        message: 'What is your GitHub username?',
        name: 'username',
    },

    {
        type: "input",
        message: 'What is your email?',
        name: 'email',
    },
])
    .then((data) => {
        // Uses provided feedback 
        fs.writeFile('README.md', generateMarkdown(data),
            error => {
                if (error) {
                    console.log('Please answer all the questions')
                }
                console.log('README generated successfully')
            })
    })
