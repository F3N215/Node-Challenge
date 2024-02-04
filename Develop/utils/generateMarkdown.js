// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length === 0) {
    return "";
  } else if (license == "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
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
  
  ${renderLicenseLink(license)} 
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
