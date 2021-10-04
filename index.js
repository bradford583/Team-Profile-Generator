const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const employees = [];

// function initApp() {
//     startHtml();
//     addEmployee();
// };
function initApp() {
    addEmployee();
}
function addEmployee() {
    inquirer.prompt([
            {
                message: "What is the employee's name?",
                name: "name"
            },
            {
                type: "list",
                message: "What is the employee's role?",
                choices: [
                    "Intern",
                    "Engineer",
                    "Manager"
                ],
                name: "role"
            },
            {
                message: "What is the employee's id?",
                name: "id"
            },
            {
                message: "What is the employee's email address?",
                name: "email"
            }
        ])
        .then(function({name,role,id,email}) {
            let roleInfo = "";
            if (role === "Intern") {
                roleInfo = "school name"
            } 
            if (role === "Engineer") {
                roleInfo = "Github username"
            } 
            if (role === "Manager") {
                roleInfo = "office phone number"
            }
            inquirer.prompt([
                {
                    message: `Enter employee's ${roleInfo}`,
                    name: "roleInfo"
                },
                {
                    type: "list",
                    message: "Would you like to add more employees?",
                    choices: [
                        "yes",
                        "no"
                    ],
                    name: "moreEmployees"
                }
            ])}
            .then(function({roleInfo}) {
                if (role === "Intern") {
                    employees.push (new Intern(name, id, email, role, roleInfo));
                } else if (role === "Engineer") {
                    employees.push (new Engineer(name, id, email, role, roleInfo));
                } else if (role === "Manager") {
                    employees.push (new Manager(name, id, email, role, roleInfo));
                }
            }.then(function({moreEmployees}) {
                if (moreEmployees === "yes") {
                    addEmployee();
                }
            })
            )
        })
};

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        
    </body>
    </html>`
}

initApp();

