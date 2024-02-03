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
    type: "list",
    name: "license",
    message: "Select a license for your project:",
    choices: [
      "Apache-2.0",
      "ISC",
      "Artistic-2.0",
      "BSL-1.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "BSD-4-Clause",
      "0BSD",
      "CC",
      "CC0-1.0",
      "CC-BY-4.0",
      "CC-BY-SA-4.0",
      "WTFPL",
      "ECL-2.0",
      "EPL-1.0",
      "EPL-2.0",
      "EUPL-1.1",
      "AGPL-3.0",
      "GPL",
      "GPL-2.0",
      "GPL-3.0",
      "LGPL",
      "LGPL-2.1",
      "LGPL-3.0",
      "ISC",
      "LPPL-3.0",
      "ISC",
      "LPPL-1.3c",
      "MS-PL",
      "MIT",
      "MPL-2.0",
      "OSL-3.0",
      "PostgreSQL",
      "OFL-1.1",
      "NCSA",
      "Unlicense",
      "Zlib",
      "None",
    ],
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
  fs.writeFile("README_test.md", generateReadmeContent(answers), () => {
    generateLicenseFile(answers.license);
  });
}

function generateLicenseInfo(licenseType)
 {
    let licenseText = "";
    switch (licenseType){
        case "MIT":
            licenseText = 'MIT License\n\n
    }
 }
// Function call to initialize app
init();

function generateReadmeContent(answers) {
  const badgeCode = `[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})`;

  const licenseNote = `## License\n
  This project is licensed under the ${answers.license} License - please see [LICENSE.md](LICENSE.md) file for details.`;

  return `
  # Project Name: ${answers.title}
  
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

  ## Testing
  ${answers.test}
  
  ${licenseNote}
  ${badgeCode}
  
  ## Any Questions?
  - Reach out to me on GitHub - here's my [Github](https://github.com/${answers.contact})

  - You can also email me directly at [email](${answers.email})
  `;
}
