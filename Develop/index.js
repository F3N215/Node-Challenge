const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");
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
    name: "table",
    message: "Share a Table of Contents",
  },
  {
    type: "input",
    name: "installInfo",
    message: "Share any installation instructions here:",
  },
  {
    type: "input",
    name: "useCase",
    message: "Describe what your project or application is used for.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select a license for your project:",
    choices: [
      "Apache-2.0",
      "ISC",
      "Artistic-2.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
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
    name: "github",
    message: "What's your GitHub username?",
  },
  {
    type: "input",
    name: "email",
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
  fs.writeFile("./dist/README.md", generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("You did it!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answer) {
    const fileName = answer.title.split(" ").join("") + ".md";

    writeToFile(fileName, answer);
  });
}

// function fetchLicense(licenseType, callback) {
//   axios
//     .get(`https://api.opensource.org/licenses/${licenseType}`)
//     .then((response) => {
//       callback(null, response.data.text);
//     })
//     .catch((error) => {
//       console.error(
//         `Error fetching license text for ${licenseType}: ${error.message}`
//       );
//       callback(error, null);
//     });
// }

function generateLicenseFile(licenseType, readmeContent) {
  fetchLicense(licenseType, (error, licenseText) => {
    if (!error && licenseText) {
      const updatedReadmeContent = `${readmeContent}\n\n## License\n\n${licenseText}`;

      fs.writeFile("README_test.md", updatedReadmeContent, (err) => {
        if (err) throw err;
        console.log("License information added to README.md");
      });
    } else {
      const defaultLicenseText = `This project is licensed under the ${licenseType} License. No detailed license text available.`;

      const updatedReadmeContent = `${readmeContent}\n\n## License\n\n${defaultLicenseText}`;

      fs.writeFile("README_test.md", updatedReadmeContent, (err) => {
        if (err) throw err;
        console.log("Default license information added to README.md");
      });
    }
  });
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
  *If you'd like to contribute, follow these instructions for how to do so.*
  ${answers.contributing}

  ## Testing
  ${answers.test}
  
  ${licenseNote}
  ${badgeCode}
  
  ## Any Questions?
  - Reach out to me on GitHub - here's my [Github](https://github.com/${answers.contact})

  - You can also email me directly by [email](${answers.email})
  `;
}
