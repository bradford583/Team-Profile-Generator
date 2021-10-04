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
            } else if (role === "Engineer") {
                roleInfo = "Github username"
            } else {
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
                employees.push(newEmployee);
                addHtml(newEmployee)
                .then(function() {
                    if (moreEmployees === "yes") {
                        addEmployee();
                    } else {
                        finishHtml();
                    }
                });
            });
        });
};

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
};

function addHtml(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = employee.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = employee.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = employee.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
};

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

initApp();

