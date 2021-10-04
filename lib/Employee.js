class Employee {

    constructor(name, id, email, role, roleInfo) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.roleInfo = roleInfo;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole(){
        return this.role;
    }

    getRoleInfo() {
        return this.roleInfo;
    }
};
module.exports = Employee;