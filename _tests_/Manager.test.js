const Manager = require('../lib/Manager');

describe("Manager class", () => {

    describe("getOfficeNumber", () => {

        const manager = new Manager("Caleb", 25, "caleb.caleb@caleb.com", 2);

        it("should return an 'office number' integer", () => {
            expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
        })
    })

    describe("getRole", () => {

        const manager = new Manager("Caleb", 25, "caleb.caleb@caleb.com");

        it("should return a 'role' string", () => {
            expect(manager.getRole()).toBe("Manager")
        })
    })
});