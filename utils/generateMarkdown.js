// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

console.log('test');

function renderLicenseBadge(license) {
  if (!license) {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.username}
  email: ${answers.email}

  ## table-of-contents

  
  * [description](#description)
  * [installation](#installation)
  * [usage](#usage)
  
  
  ### Installation
  ### Usage
  


  


`;
}

export default generateMarkdown
