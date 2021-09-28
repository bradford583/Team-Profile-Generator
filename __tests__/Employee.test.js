const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test('Sets name via constuctor arguments', () => {
    const name = "Chris";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Can set id via constructor arguments', () => {
    const testValue = 666;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

