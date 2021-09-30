const Engineer = require('../lib/Engineer');

test('Can set GitHub account via constructor', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer("Foo", 1, "chris@chris.com", testValue);
    expect(e.github).toBe(testValue);
});

test('getRole() returns Engineer', () => {
    const testValue = "Engineer";
    const e = new Engineer('Foo', 1, "chris@chris.com", 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
});

test('Can get username ver getGithub()', () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "chris@chris.com", testValue);
    expect(e.getGithub()).toBe(testValue);
})