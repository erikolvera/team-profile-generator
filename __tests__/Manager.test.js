const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getOfficeNumber", () => {
    it("should return the manager office number", () => {
      const manager = new Manager("Erik Olvera", 1, "erik.olvera@email.com", 22);
      expect(manager.getOfficeNumber()).toBe(22);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const manager = new Manager("Erik Olvera", 1, "john.smith@email.com", 22);
      expect(manager.getRole()).toBe("Manager");
    });
  });

  describe("Inherited properties", () => {
    it("should return the name, id, and email of the manager", () => {
      const manager = new Manager("Erik Olvera", 1, "erik.olvera@email.com", 22);
      expect(manager.getName()).toBe("Erik Olvera");
      expect(manager.getID()).toBe(1);
      expect(manager.getEmail()).toBe("erik.olvera@email.com");
    });
  });
});