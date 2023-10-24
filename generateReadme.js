function generateMd(data) {
    console.log('Generating markdown...');
    return`
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
  
  module.exports = generateMd;