// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  # Description
  
  ${answers.description}
  
  # Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  # Installation
  
  Please install the following dependencies to run this application: ${answers.installation}
  
  # Usage
  
  ​This application is used for ${answers.usage}
  
  # License
  
  This project is license under the ${answers.license} license.
  
  # Contributing
  
  ​Contributors: ${answers.contributing}
  
  # Tests
  
  For running test: use the following command: ${answers.test}
  
  # Questions
  
  Should you have any questions please contact ${answers.github} at ${answers.email}.
  
  `
  }

module.exports = generateMarkdown;
