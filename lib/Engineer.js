const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, roleInfo) {
        super(name, id, email, role, roleInfo);
        
    }
};

module.exports = Engineer;