const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
    startHtml();
    addEmployee();
};

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
                name: "rold"
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
            } else if (role === "Engineer") {
                roleInfo === "Github username"
            } else {
                roleInfo === "office phone number"
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
            ])
            .then(function({roleInfo, moreEmployees}) {
                let newEmployee;
                if (role === "Intern") {
                    newEmployee = new Intern(name, id, email, roleInfo);
                } else if (role === "Engineer") {
                    newEmployee = new Engineer(name, id, email, roleInfo);
                } else {
                    newEmployee = new Employee(name, id, email, roleInfo);
                }
            })
        })
};

