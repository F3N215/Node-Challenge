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
    name: "title",
    message: "What's the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project!",
  },
  {
    type: "input",
    name: "table",
    message: "Share a Table of Contents",
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Save to file?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your project used for?",
  },
  {
    type: "input",
    name: "license",
    message: "Which license is your project?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How can people contribute to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you test your project?",
  },
  {
    type: "input",
    name: "contact",
    message: "What's your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What's your email?",
  },
];

// TODO: Create a function to write README file
function newFile(fileName, data) {
  fs.writeFile("README_test.md", " ", () => {}); // a closure
}

// TODO: Create a function to initialize app
function init() {
  newFile();
  inquirer.prompt(questions).then((answers) => writeToFile(answers));
}

function writeToFile(answers) {
  //   let name = answers["Project Name"];
  //   let description = answers["Describe your project!"];
  //   let table = answers["Table of Contents"];
  fs.writeFile("READMEtest2.md", generateReadmeContent(answers), () => {});
  //   fs.appendFile("README_test.md", `# ${name}\n`, () => {}); // string interpolation to create md
  //   fs.appendFile("README_test.md", `## ${description}\n`, () => {});
  //   fs.appendFile("README_test.md", `### ${table}\n`, () => {});

  //fs.appendFile("README_test.md", `#### ${name}\n`, () => {});
}

// Function call to initialize app
init();

function generateReadmeContent(answers) {
  return `
  #
  ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  ${answers.table}

  ## Installation
  ${answers.installation}
  
  ### Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## License
  This project is licensed under the ${answers.license} License - see the [LICENSE.md](LICENSE.md) file for details.
  
  ## Any Questions?
  - Reach out to me on GitHub - here's my [Github](https://github.com/${answers.contact})

  - You can also email me directly at [email](${answers.email})
  `;
}
