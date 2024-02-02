// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// placing within 'questions' will run it immediately
// need separating the data structure in which we store the prompts from where we invoke them
const questions = [
  // needs to take a list of objects
  {
    type: "input",
    name: "Project Name",
    message: "What's the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Describe your project!",
  },
  {
    type: "input",
    name: "Table of Contents",
    message: "Table of Contents",
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Save to file?",
  },
  // {
  //   type: "input",
  //   name: "",
  // },
];

// TODO: Create a function to write README file
function newFile(fileName, data) {
  fs.writeFile("README_test.md", " ", () => {}); // a closure
}

// TODO: Create a function to initialize app
function init() {
  newFile();
  inquirer
    .prompt(questions)
    .then((answers) => console.log(JSON.stringify(answers, null, 2)));
}

function writeToFile(answers) {}

// Function call to initialize app
init();
