
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const readmeDataArgs = process.argv.slice(2);
const [title, author] = readmeDataArgs;



fs.writeFile('./index.html', generatePage(title, author), err => {
  if(err) throw err;

  console.log('README complete! Checkout out index.hmtl to see the output!');
});