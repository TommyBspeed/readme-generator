//decalre global variables for inquirer and fs
const inquirer = require("inquirer");
const fs = require("fs");
//shields:
//APM: /apm/1/:packageName
//NPM: /npm/1/:packageName
//Bower: /bower/1/:packageName
//greasy fork: /greasyfork/1/:packageName

//create a inquirer prompt to be invoked when node index.js is called in the command line. this will contain all of the questions to be asked to the user in regards to their project which will then be dynamically added to a readme file.
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a description of your program.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the install instructions for your program?",
      name: "install",
    },
    {
      type: "input",
      message: "What is some useage information for your program?",
      name: "usage",
    },
    {
      type: "input",
      message: "Who are the contributors on your program?",
      name: "contribution",
    },
    {
      type: "input",
      message: "What are some tests that you have run on your program?",
      name: "tests",
    },
    { type: "input", message: "What is your GitHub URL?", name: "github" },
    {
      type: "input",
      message: "What email address can someone contact you at?",
      name: "email",
    },
    {
      type: "list",
      message: "Which license is this application covered under?",
      name: "license",
      choices: ["APM", "NPM", "Bower", "Greasy Fork", "none"],
    },
  ])
  //after the input is recieved from the user we then use an arrow function to take that response and create a userRes variable where we will stringify the results and then wite them to the readme.md file using the fs
  .then((res) => {
    let userRes = JSON.stringify(res);
    function touchReadme(res) {
      console.log(res);
      //This is the boiler plate structure for the README.md file that will contain styling. The user input recieved is added to the areas marked with ${}
      return `# <${userRes.title}>

    ## Description
    ${userRes.description}
    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [Tests](#tests)
    - [Questions](#questions)
    - [License](#license)

    ## Installation
    ${userRes.install}
    ## Usage
    ${userRes.usage}
    ## Contributions
    ${userRes.contribution}
    ## Tests
    ${userRes.tests}
    ## Questions
    For any Questions please contact me via GitHub or my Email listed below:
    ${userRes.github}
    ${userRes.email}
    ## License
    ${userRes.license}
    ## Badges

    `;
    }
    const stringData = touchReadme(res);
    fs.writeFile("README.md", stringData, (res) => {
      //Let the user know that it was successful.
      console.log("README successfully created!");

      //   touchReadme();
    });
  });
