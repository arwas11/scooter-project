class User {
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
    this.loggedIn = !this.loggedIn;
  }
}
module.exports = User;
