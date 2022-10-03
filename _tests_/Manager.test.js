const Manager = require('../lib/Manager');

describe("Manager class", () => {

    describe("getRole", () => {

        const manager = new Manager("Caleb", 25, "caleb.caleb@caleb.com");

        it("should return a 'role' string", () => {
            expect(manager.getRole()).toBe("Manager")
        })
    })
});