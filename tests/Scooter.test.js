const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  test("Scooter class should create Scooter instance", () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
});

//Method tests
describe("scooter methods", () => {
  // tests here!

  //rent method
  test("Successful renting of a scooter to a user", () => {
    const user1 = new User("test", "test123", 20);
    const scooter1 = new Scooter("CHI");
    scooter1.rent(user1);
    expect(scooter1.user).toBe(user1);
    expect(scooter1.station).toBe(null);
  });

  test("rent fails due to low battery", () => {
    const scooter1 = new Scooter("NYC");
    scooter1.charge = 15;
    const user1 = new User("test", "test123", 20);
    expect(() => scooter1.rent(user1)).toThrow("scooter needs to charge");
    expect(scooter1.user).toBeNull();
    expect(scooter1.station).toBe("NYC");
  });

  test("rent fails due to broken scooter", () => {
    const scooter1 = new Scooter("NYC");
    scooter1.isBroken = true;
    const user1 = new User("test", "test123", 10);
    expect(() => scooter1.rent(user1)).toThrow("scooter needs repair");
    expect(scooter1.user).toBeNull();
    expect(scooter1.station).toBe("NYC");
  });

  //dock method
  test("dock succeeds", () => {
    const scooter1 = new Scooter("Milford Mill");
    const user1 = new User("test", "test123", 40);
    scooter1.rent(user1);
    scooter1.dock("West Loop");
    expect(scooter1.user).toBeNull();
    expect(scooter1.station).toBe("West Loop");
  });
  //requestRepair method

  //charge method
});
