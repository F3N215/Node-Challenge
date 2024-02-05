// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length === 0) {
    return "";
  } else if (license == "Artistic-2.0") {
    return `[![License](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
  } else if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "BSD-2") {
    return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (license == "BSD-3") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license == "CC") {
    return `[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)`;
  } else if (license == "Mozilla") {
    return `[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license == "MIT") {
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "GNU") {
    return `[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license == "ISC") {
    return `[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length === 0) {
    return "";
  } else if (license == "Artistic-2.0") {
    return `https://opensource.org/license/artistic-2-0`;
  } else if (license == "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == "BSD-2") {
    return `https://opensource.org/license/bsd-2-clause`;
  } else if (license == "BSD-3") {
    return `https://opensource.org/license/bsd-3-clause`;
  } else if (license == "CC") {
    return `https://creativecommons.org/licenses/by-nc/4.0`;
  } else if (license == "Mozilla") {
    return `https://opensource.org/licenses/MPL-2.0`;
  } else if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license == "GNU") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license == "Boost") {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  } else if (license == "ISC") {
    return `https://opensource.org/licenses/ISC`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) {
    return "";
  } else {
    return `## License

  ${renderLicenseBadge(license)}
  
  ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installInfo}

  ## Usage
  ${data.useCase}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributionsInfo}
  
  ## Testing
  ${data.testsInfo}

  ## Any Questions?
  My GitHub: [${data.github}](https://github.com/${data.github}) <br>
  Email me: ${data.emailInfo}
`;
}

module.exports = generateMarkdown;
