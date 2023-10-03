// class User extends ScooterApp
class User {
  // #password
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  // each called by ScooterApp
  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
    } else {
      throw new Error("incorrect password");
    }
  }

  logout() {
    this.loggedIn = !this.loggedIn; //CHECK HERE IF CHANGED
  }
}
module.exports = User;
