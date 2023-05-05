const Employee = require("../lib//Employee")

describe("Employee", () => {
  describe("getName", () => {
    it("should return the name of the employee", () => {
      const employee = new Employee("Erik Olvera", 1, "erik.olvera@email.com");
      expect(employee.getName()).toBe("Erik Olvera");
    });
  });

  describe("getID", () => {
    it("should return the ID of the employee", () => {
      const employee = new Employee("Erik Olvera", 1, "erik.olvera@email.com");
      expect(employee.getID()).toBe(1);
    });
  });

  describe("getEmail", () => {
    it("should return the email of the employee", () => {
      const employee = new Employee("Erik Olvera", 1, "erik.olvera@email.com");
      expect(employee.getEmail()).toBe("erik.olvera@email.com");
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const employee = new Employee("Erik Olvera", 1, "erik.olvera@email.com");
      expect(employee.getRole()).toBe("Employee");
    });
  });
});