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
// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-success.svg)

    ## Description
    ${data.description}
    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [Tests](#tests)
    - [Questions](#questions)
    - [License](#license)

    ## Installation
    ${data.install}
    ## Usage
    ${data.usage}
    ## Contributions
    ${data.contribution}
    ## Tests
    ${data.tests}
    ## Questions
    For any Questions please contact me via GitHub or my Email listed below:
    https://github.com/${data.github}
    ${data.email}
    ## Badges
`;
};

// use for importing Markdown in index
module.exports = generateMarkdown;
