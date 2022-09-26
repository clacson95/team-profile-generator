const Employee = require('../lib/Employee');

describe("Employee class", () => {

    describe("getRole", () => {
        expect(new Employee("", "", "").getRole()).toBe("Employee")
    })
});