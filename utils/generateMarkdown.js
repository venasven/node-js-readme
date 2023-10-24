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
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  
  ${data.Description}
  
  # Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  # Installation
  
  Please install the following dependencies to run this application: ${data.Installation}
  
  # Usage
  
  ​This application is used for ${data.Usage}
  
  # License
  
  This project is license under the ${data.License} license.
  
  # Contributing
  
  ​Contributors: ${data.Contributor}
  
  # Tests
  
  For running test: use the following command: ${data.Test}
  
  # Questions
  
  Should you have any questions please contact ${data.UserName} at ${data.Email}.
  
  `
  }

module.exports = generateMarkdown;
