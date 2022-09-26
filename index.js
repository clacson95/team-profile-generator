// ******************
// TABLE OF CONTENTS
// ******************
// Importing packages




// Include required packages
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");




// Include inquirer prompt "names" to perform substitutions in template literal
// Content of the HTML file
const generateHTML = ({ name, license, title, test, describe, install, usage, contribute, github, email }) =>
`${title}  ${licenseBadge(license)}

${licenseText(name, license, describe)}
`;


// Requesting user input with inquirer
inquirer 
	.prompt([
    {
        type: "input",
        message: "What is your full name?*",
        name: "name",
        validate: function(name) {
            if (name) {
                return true;
            } else {
                console.log("Your full name is required.")
                return false;
            }
        }
    },
    {
		type: "input",
		message: "What is the title of your project, or the name of your repository?*",
		name: "title",
        validate: function(title) {
            if (title) {
                return true;
            } else {
                console.log("A title for your project is required.")
                return false;
            }
        }
	},
	{
		type: "input",
		message: "How would you describe your project? (What was your motivation? What problem does it solve? What did you learn?)",
		name: "describe",
	},
	{
		type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?",
        name: "install",
    },
    {
		type: "input",
        message: "What are instructions for usage?",
        name: "usage",
    },
    {
		type: "list",
        message: "What license would you like to choose for your project? A license tells others what they can and cannot do with your code.",
        name: "license",
        choices: [
            "Apache License v2.0", "GNU General Public License v3.0", "MIT License", "none",
        ],
    },
    {
		type: "input",
        message: "How can others contribute to the code?",
        name: "contribute",
    },
    {
		type: "input",
        message: "What tests would you like to include for your program?",
        name: "test",
    },
    {
		type: "input",
        message: "What is the URL to your GitHub?",
        name: "github",
    },
    {
		type: "input",
        message: "What is your email address?",
        name: "email",
    },
])

    // Generating HTML file
	.then((answers) => {
		const mdPageContent = generateHTML(answers);
        console.log(answers);
		fs.writeFile("README.md", mdPageContent, (err) =>
			err ? console.log(err) : console.log("Successfully created README.md!")
		);
	});
