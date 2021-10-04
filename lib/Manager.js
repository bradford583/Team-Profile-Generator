const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, role, roleInfo) {
        super (name, id, email, role, roleInfo);
    }
};

module.exports = Manager;