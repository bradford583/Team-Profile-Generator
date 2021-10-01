const Manager = require('../lib/Manager');

test("Can set office numebr via constructor argument", () => {
    const testValue = 666;
    const e = new Manager("Foo", 1, "chris@chris.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return Manager", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "chris@chris.com");
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "chris@chris.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
})