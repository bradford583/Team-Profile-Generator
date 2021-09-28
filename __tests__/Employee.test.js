const { test, expect } = require('@jest/globals');
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

test('Can set email via constructor argurment', () => {
    const testValue = "chris@chris.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Can get name via getName()', () => {
    const testValue = "Chris";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('Can get id via getId()', () => {
    const testValue = 666;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
    const testValue = "chris@chris.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return Employee', () => {
    const testValue = "Employee";
    const e = new Employee('Chris', 1, 'chris@chris.com');
    expect(e.getRole()).toBe(testValue);
});

