const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the school name", () => {
      const intern = new Intern("Erik Olvera", 1, "erik.olvera@email.com", "University of Houston");
      expect(intern.getSchool()).toBe("University of Houston");
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const intern = new Intern("Erik Olvera", 1, "erik.olvera@email.com", "University of Houston");
      expect(intern.getRole()).toBe("Intern");
    });
  });

  describe("Inherited properties", () => {
    it("should return the intern name, id, and email", () => {
      const intern = new Intern("Erik Olvera", 1, "erik.olvera@email.com", "University of Houston");
      expect(intern.getName()).toBe("Erik Olvera");
      expect(intern.getEmail()).toBe("erik.olvera@email.com");
      expect(intern.getID()).toBe(1);
    });
  });
});