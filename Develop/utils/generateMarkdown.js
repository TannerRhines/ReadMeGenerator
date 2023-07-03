// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseSection(license) {
  if (data.license === MIT) {
    `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
(https://opensource.org/licenses/MIT)`
  } else {
    ''
  }

};


function generateMarkdown(data) {
  return `# 
  
  ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](##Installation)
  -[Test-Required](##Test-Required)
  -[Contributors](##Contributors)
  -[Contact-Info](##Contact-Info)

  ## License Used
  ${data.license}

  ## Installation
  ${data.installation}

  ## Data Usage
  ${data.usage}

  ## Tests Required
  ${data.test}

 
  # Contact Info
  Have additional questions? Please reach me at ${data.email}

  # Contributors
  ${data.contributors}

`;
}

module.exports = generateMarkdown;