const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

const scooterApp = new ScooterApp();
let response1 = scooterApp.registerUser("Joe Bloggs", "test123", 21);
const user3 = new User("test3", "test123", 21);
// const user5 = new User("test5", "test123", 41);
const user4 = new User("testing4", "testing123", 50);
const user5 = scooterApp.registerUser("test5", "test123", 41);
const scooter2 = new Scooter("LA");

// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});

// log in
describe("Scooter App methods", () => {
  test("logging the registered user in", () => {
    scooterApp.loginUser("test5", "test123");
    expect(user5.loggedIn).toBe(true);
  });

  //  log out
  test("logging the registered user out", () => {
    scooterApp.logoutUser("test5");
    expect(user5.loggedIn).toBe(false);
  });

  // rent scooter
  test("renting scooter to a user", () => {
    const newScooter1 = scooterApp.createScooter("LA");
    scooterApp.rentScooter(newScooter1, response1);
    expect(newScooter1.user).toEqual(response1);    
    // scooterApp.dockScooter(newScooter1, "LA");
    // expect(newScooter1.user).toBe(null);
  });

  // dock scooter
  test("docking scooter", () => {
    const app = new ScooterApp();
    const me = app.registerUser("me", "me123", 50);
    const myScooter = app.createScooter("CHI");
    app.rentScooter(myScooter, me);
    app.dockScooter(myScooter, "West Loop");
    expect(myScooter.user).toBeNull();
    expect(myScooter.station).toBe("West Loop");
  });
});
