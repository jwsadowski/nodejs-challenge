// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
 // import generate markdown function 
import generateMarkdown from './utils/generateMarkdown'; 

// TODO: Create an array of questions for user input
const questions = [
    type = 'input',
    message = 'What is your username?',
    name = 'question',

    type = 'input',
    message = 'What is your email address?',
    name = 'question'
];

console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use fs to write the readme file
    fs.writeFile('README.md', data, (err) => {
       err ? console.log(err) : console.log('File written successfully\n');
    }) 
}

// TODO: Create a function to initialize app
function init() {
    // use inquirer
    inquirer
    .prompt([ {
        type: 'input',
        message: 'What is your username?',
        name: 'question', 
    },
    {
       type: 'input',
       message: 'What is your email address?',
       name: 'question'
    }
        


    ]) 
    .then(answers => {
        console.log('generateMarkdown.js', answers)
    }) 
    // pass answers into generate markdown 
    // use string from generate markdown and call write to file
    fs.writeFile('generateMarkdown.js', data, (err) => err ? console.error(err) : console.log('Success')); 
}

// Function call to initialize app
init();
