const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the engineer GitHub username", () => {
      const engineer = new Engineer("Erik Olvera", 1, "erik.olvera@email.com", "eolvera");
      expect(engineer.getGithub()).toBe("eolvera");
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer("Erik Olvera", 1, "erik.olvera@email.com", "eolvera");
      expect(engineer.getRole()).toBe("Engineer");
    });
  });

  describe("Inherited properties", () => {
    it("should return the engineer name, id, and email", () => {
      const engineer = new Engineer("Erik Olvera", 1, "erik.olvera@email.com", "eolvera");
      expect(engineer.getName()).toBe("Erik Olvera");
      expect(engineer.getEmail()).toBe("erik.olvera@email.com");
      expect(engineer.getID()).toBe(1);
    });
  });
});
