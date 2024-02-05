const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
// placing within 'questions' will run it immediately
// need separating the data structure in which we store the prompts from where we invoke them
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Tell us your project title.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        console.log("Write a short description about your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installInfo",
    message: "Share any installation instructions here:",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license for your project:",
    choices: [
      "Artistic-2.0",
      "Apache-2.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "CC",
      "Mozilla",
      "MIT",
      "GNU",
      "Boost",
      "ISC",
    ],
    validate: (choicesLength) => {
      if (choicesLength.length <= 1) {
        return true;
      } else {
        return "Pick a license!";
      }
    },
  },
  {
    type: "input",
    name: "usageInfo",
    message: "Describe the main use for your project.",
  },
  {
    type: "input",
    name: "contributionsInfo",
    message: "Any guidelines for contributing?",
  },
  {
    type: "input",
    name: "testsInfo",
    message: "Name some tests would you like to include:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What's your GitHub username?",
  },
  {
    type: "input",
    name: "emailInfo",
    message: "What's your email?",
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Save to file?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./drop/README.md", generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("You did it!");
  });
}

function newFile(fileName, data) {
  fs.writeFile("README_project.md", " ", () => {});
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answer) {
    const fileName = answer.title.split(" ").join("") + ".md";

    writeToFile(fileName, answer);
  });
}

// Function call to initialize app
init();
