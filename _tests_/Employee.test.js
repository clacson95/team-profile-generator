const Employee = require('../lib/Employee');

describe("Employee class", () => {

    describe("getName", () => {

        const employee = new Employee("Caleb", 25, "caleb.caleb@caleb.com");

        it("should return a 'name' string", () => {
            expect(employee.getName()).toEqual(expect.any(String))
        })
    })

    describe("getId", () => {

        const employee = new Employee("Caleb", 25, "caleb.caleb@caleb.com");

        it("should return an 'id' number", () => {
            expect(employee.getId()).toEqual(expect.any(Number))
        })
    })

    describe("getEmail", () => {

        const employee = new Employee("Caleb", 25, "caleb.caleb@caleb.com");

        it("should return an 'email' string", () => {
            expect(employee.getEmail()).toEqual(expect.any(String))
        })
    })

    describe("getRole", () => {

        const employee = new Employee("Caleb", 25, "caleb.caleb@caleb.com");

        it("should return a 'role' string", () => {
            expect(employee.getRole()).toBe("Employee")
        })
        
    })
});