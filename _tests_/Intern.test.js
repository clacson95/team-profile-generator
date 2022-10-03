const Intern = require('../lib/Intern');

describe("Intern class", () => {

    describe("getSchool", () => {

        const intern = new Intern("Caleb", 25, "caleb.caleb@caleb.com", "UNH");

        it("should return a 'school name' string", () => {
            expect(intern.getSchool()).toEqual(expect.any(String))
        })
    })

    describe("getRole", () => {

        const intern = new Intern("Caleb", 25, "caleb.caleb@caleb.com", "UNH");

        it("should return a 'role' string", () => {
            expect(intern.getRole()).toBe("Intern")
        })
    })
});