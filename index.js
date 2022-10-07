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
const generateHTML = require("./src/generateHTML")

const teamArray = [];

const runApp = () => {
    
    addMember();
}


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
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        when: (input) => input.role === "Manager",
        validate: function(officeNumber) {
            if (officeNumber) {
                return true;
            } else {
                console.log("The manager's office number is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        when: (input) => input.role === "Engineer",
        validate: function(github) {
            if (github) {
                return true;
            } else {
                console.log("The engineer's GitHub username is required.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        when: (input) => input.role === "Intern",
        validate: function(school) {
            if (school) {
                return true;
            } else {
                console.log("The intern's school is required.")
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmContinue",
        message: "Would you like to add another member to the team?",
        default: false
    }])

    .then(employeeData => {

        let { role, name, id, email, officeNumber, github, school, confirmContinue } = employeeData;
        let newMember;

        if (role === "Manager") {

            newMember = new Manager(name, id, email, officeNumber);

        } else if (role === "Engineer") {

            newMember = new Engineer(name, id, email, github);

        } else if (role === "Intern") {

            newMember = new Intern(name, id, email, school);

        }
        teamArray.push(newMember);
        
        if (confirmContinue) {
            addMember();
        } else {
            let html = generateHTML(teamArray);

            writeFile(html);
        }
        
    })
}

    // Generating HTML file

    const writeFile = data => {    
		fs.writeFile("./dist/index.html", data, (err) =>
			err ? console.log(err) : console.log("Your team profile has successfully been created as index.html!")
		);
	};

runApp();