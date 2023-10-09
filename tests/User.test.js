const User = require("../src/User");

const user1 = new User("Joe Bloggs", "test123", 21);
const user2 = new User("testing", "testing123", 50);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user1.username).toBe("string");
  });
  // test password

  // test age
});

describe("User methods tests", () => {
  // test successful login
  test("user logged in", () => {
    expect(user1.login("test123")).toBe();
  });

  // test unsuccessful login

  test("user fails log in due to incorrect password", () => {
    expect(() => user2.login("test123")).toThrow("incorrect password");
  });
  // test logout

  test(" user logged out", () => {
    user1.login("test123");
    user1.logout();
    expect(user1.loggedIn).toBe(false);
  });
});
