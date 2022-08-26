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
    ## License
    ${data.license}
    ## Badges
`;
};

// use for importing Markdown in index.js
module.exports = generateMarkdown;
