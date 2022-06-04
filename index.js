// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')


// Array of questions for user input
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
      type: 'input',
      name: 'link',
      message: 'Enter the link to your GitHub repository'
      },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license',
      choices: ['None', 'MIT', 'WTFPL', 'PDDL' ]
    },
    {
    type: 'input',
    name: 'username',
    message: 'Enter the GitHub username',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
    },
    {
    type: 'input',
    name: 'email',
    message: 'Enter your email'
    }
  ];


// Function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./generatedREADME.md', fileContent, err => {
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


// Function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(answer) {
      console.log(answer);
    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent)
  });
}

// Function call to initialize app
init();

module.export = questions;