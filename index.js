// TODO: Include packages needed for this application
const { fs } = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const util = require('util');
const generatorMarkdown = require('./util/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
      type:'input', 
      name: 'title',
      message: 'What is the name of your project?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of the project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide some information about your project:'
    },
    {
      type: 'input',
      name: 'table-of-contents',
      message: 'Enter Table of Contents'
    }, 
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions'
    },  
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information'
    },   
    {
      type: 'checkbox',
      name: 'technologies',
      choices:
      [ 'HTML', 
        'CSS',
        'Javascript',
        'Node',
        'MySQL',
        'Express',
        'React',
        'Handlebars',
        'Bootstrap'],
      message: 'Check all technologies used'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Enter your first and last name'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license',
      choices: ['None', 'MIT', 'WTFPL', 'PDDL' ]
    },
    {
    type: 'input',
    name: 'name',
    message: 'Enter the GitHub username',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
    },
    {
    type: 'input',
    name: 'link',
    message: 'Enter the link to your GitHub repository'
    },
    {
    type: 'input',
    name: 'link',
    message: 'Enter your email'
    }
  ];


// TODO: Create a function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./generateREADME.md', fileContent, err => {
      if (err) {
        reject(err)
        return;
      }
      resolve({
        ok:true
      });
    });
  });
};


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(answer) {
      console.log(answer);
    var fileContent = generatorMarkdown(answer);
    writeToFile(fileContent)
  });
}

// Function call to initialize app
init();

module.export = questions;