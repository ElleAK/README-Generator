const fs = require('fs');
const inquirer = require('inquirer');
const index = require('./index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === 'WTFPL') {
    badge = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]'
  } else if (license === 'PDDL') {
    badge = '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]'
  } else {
    badge = ''
  }
  return badge;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'WTFPL') {
    licenseLink = 'http://www.wtfpl.net/about/'
  } else if (license === 'PDDL') {
    licenseLink = 'https://opendatacommons.org/licenses/pddl/'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = 'License: ${license}'
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${answer.title}
  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Table of Contents:
  ### [Description](#description)
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [Technologies](#technologies)
  ### [Tests](#test)
  ### [Contributing](#contributing)
  ### [Author](#author)
  ### [License](#license)
  ### [Questions](#questions)

  ##

`;
}

module.exports = generateMarkdown;
