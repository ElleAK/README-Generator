const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(title, author);



// fs.writeFile('./index.html', pageHTML, err => {
//   if(err) throw err;

//   console.log('README complete! Checkout out index.hmtl to see the output!');
// });
const promptUser = () => {
  return inquirer.prompt([
    {
      type:'input', 
      name: 'title',
      message: 'What is the name of your project?'
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
      type: 'checkbox',
      name: 'license',
      message: 'Choose a license',
      choices: [, ]
    },
    
  ])
};

const promptQuestions = () => {
  console.log(`
=====================
Add Contact Questions
=====================
`);

return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Enter the GitHub username'
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
]);
};

promptUser()
.then(answers => console.log(answers))
.then(promptQuestions)
.then(questionAnswers => console.log(questionAnswers));