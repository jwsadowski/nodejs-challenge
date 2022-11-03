// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
// import generate markdown function 
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your username?',
    name: 'question',},

{
    type: 'input',
    message: 'What is your email address?',
    name: 'question'
}];

console.log(questions);

// TODO: Create a function to write README file
function writeToFile(README, data) {
    // use fs to write the readme file
    fs.writeFile('README.md', data, (err) => {
        err ? console.log(err) : console.log('File written successfully\n');
    })
}

// TODO: Create a function to initialize app
function init() {
    // use inquirer
    inquirer
        .prompt([{
            type: 'input',
            message: 'What is your username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }



        ])
        .then(answers => {
            console.log('Answer: ', answers);
            const data = generateMarkdown(answers)
            fs.writeFile('README.md', data, (err) => err ? console.error(err) : console.log('Success'));
        })


    // pass answers into generate markdown 
    // use string from generate markdown and call write to file

} 

// Function call to initialize app
init();
