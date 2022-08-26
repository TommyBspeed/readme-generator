//decalre global variables for inquirer and fs
const inquirer = require("inquirer");
const fs = require("fs");

//link to the markdown js development file in util directory
const generateMarkdown = require("./util/markdown.js");

//create a questions function with an inquirer prompt containing an array of all the questions to be asked to the user.

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your program?",
      name: "title",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the name of your program!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Write a description of your program.",
      name: "description",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description for your program!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What are the install instructions for your program?",
      name: "install",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter install steps for your program!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is some useage information for your program?",
      name: "usage",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a usage description.");
          return false;
        }
      },
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
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What email address can someone contact you at?",
      name: "email",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "list",
      message: "Which license is this application covered under?",
      name: "license",
      choices: ["APM", "NPM", "Bower", "Greasy Fork", "none"],
    },
  ]);
};

// function to write README file using file system (fs)
const writeFile = (data) => {
  fs.writeFile("newREADME.md", data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // Let the user know when the README has been created successfully.
    } else {
      console.log("Your README has been successfully created!");
    }
  });
};

//call questions function to initialize program.
questions()
  // gather user response (res)
  .then((res) => {
    return generateMarkdown(res);
  })
  // Display the gathered data to page
  .then((data) => {
    return writeFile(data);
  })
  // catch any potential errors
  .catch((err) => {
    console.log(err);
  });
