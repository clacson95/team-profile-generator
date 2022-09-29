// ******************
// TABLE OF CONTENTS
// ******************
// Importing packages




// Include required packages
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

// Include class files
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Include HTML template
const generateHTML = require("./dist/generateHTML")

const buildTeam = [];

// Include inquirer prompt "names" to perform substitutions in template literal
// Content of the HTML file
const generateHTML = ({ name, license, title, test, describe, install, usage, contribute, github, email }) =>
`${title}  ${licenseBadge(license)}

${licenseText(name, license, describe)}
`;


// Requesting user input with inquirer
// Prompts for adding employees to the team
const addMember = () => {
    inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is the team member's name?",
        validate: function(name) {
            if (name) {
                return true;
            } else {
                console.log("The team member's name is required.")
                return false;
            }
        }
    },
    {
        type: "list",
        name: "role",
        message: "What is the team member's role?",
        choices: ["Manager", "Engineer", "Intern"],
        validate: function(role) {
            if (role) {
                return true;
            } else {
                console.log("The team member's role is required.")
                return false;
            }
        }
    },
    {
		type: "input",
        name: "id",
		message: "What is the team member's ID?",
        validate: function(id) {
            if (id) {
                return true;
            } else {
                console.log("The team member's id is required.")
                return false;
            }
        }
	},
    {
		type: "input",
        name: "email",
        message: "What is the team member's email address?",       
        validate: function(email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log("A valid email address for the team member is required.")
                return false;
            }
        }
    }])
    .then(function({ name, role, id, email }) {
        let roleInfo = "";
        if (role === "Manager") {
            roleInfo = "office number";
        } else if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        }

        inquirer.prompt([
        {
            type: "input",
            name: "roleInfo",
            message: `What is the team member's ${roleInfo}?`,
            validate: function(roleInfo) {
                if (roleInfo) {
                    return true;
                } else {
                    console.log(`The team member's ${roleInfo} is required.`)
                    return false;
                }
            }
        },
        {
            type: "confirm",
            message: "Would you like to add another member to the team?",
            name: "addMore",
            default: false
        }])
    }

    .then(employeeData => {

        let { role, name, id, email, github, school, addMore } = employeeData;
        let newMember;

        if (role === "Manager") {

            newMember = new Manager (name, id, email, roleInfo);

        } else if (role === "Engineer") {

            newMember = new Engineer (name, id, email, roleInfo);

        } else if (role === "Intern") {

            newMember = new Intern (name, id, email, roleInfo);

        }
        buildTeam.push(newMember);
        addHtml(newMember);
        .then(function(addMore) {
            if (addMore) {
                addMember();
            } else {
                finishHtml();
            }
        }
    })
    
}


    // Generating HTML file



    // const genFile = data => {    
	// 	fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
	// 		err ? console.log(err) : console.log("Successfully created index.html!")
	// 	);
	// };


	// .then((answers) => {
	// 	const htmlPageContent = generateHTML(answers);
    //     console.log(answers);
	// 	fs.writeFile("index.html", htmlPageContent, (err) =>
	// 		err ? console.log(err) : console.log("Successfully created index.html!")
	// 	);
	// });
