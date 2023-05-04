const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const displayTeam = require("./src/template.js");

let teamArray = [];

function buildTeam () {

 function staffAssembling () {
    inquirer.prompt([{
        type: "list",
        name: "employeeType",
        message: "What type of employee will be added to the team?",
        choices: ["Manager", "Engineer", "Intern", "No more employees to add"]
    }]).then(function (response) {
        switch (response.employeeType) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "No more employees to add":
                createHtml();
                break;
            default:
                buildTeam();
        }
    })
 }


 function addManager () {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        staffAssembling();
        });
    }

 function addEngineer () {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineers name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineers ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineers email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineers github username?"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        staffAssembling();
        });
 } 

 function addIntern () {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the interns name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the interns ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the interns email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school is the intern attending?"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        staffAssembling();
        });
 } 


 function createHtml () {
 console.log("Dream Team Assembled!")
 fs.writeFileSync(outputPath, displayTeam(teamArray), "UTF-8")

 }

 staffAssembling();

}

buildTeam();