const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {

    describe("getGithub", () => {

        const engineer = new Engineer("Caleb", 25, "caleb.caleb@caleb.com", "clacson95");

        it("should return a 'github username' string", () => {
            expect(engineer.getGithub()).toEqual(expect.any(String))
        })
    })

    describe("getRole", () => {

        const engineer = new Engineer("Caleb", 25, "caleb.caleb@caleb.com", "clacson95");

        it("should return a 'role' string", () => {
            expect(engineer.getRole()).toBe("Engineer")
        })
    })
});