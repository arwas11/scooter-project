const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor() {
    this.stations = {
      NYC: [],
      LA: [],
      CHI: [],
      "West Loop": [],
    };
    this.registeredUser = {};
  }

  registerUser(username, password, age) {
    if (age < 18) {
      throw new Error("too young to register");
    }

    if (!this.registeredUser[username] && age > 18) {
      const user = new User(username, password, age);
      this.registeredUser[username] = user;
      console.log("user has been registered");
      return user; //to return user info
    } else {
      throw new Error("already registered");
    }
  }

  loginUser(username, password) {
    let thisUser = this.registeredUser[username];
    if (thisUser) {
      thisUser.login(password);
      console.log("user has been logged in");
    } else {
      throw new Error("Username or password is incorrect");
    }
  }

  logoutUser(username) {
    let thisUser = this.registeredUser[username];
    if (thisUser) {
      thisUser.logout();
      console.log("user is logged out");
    } else {
      throw new Error("no such user is logged in");
    }
  }

  createScooter(station) {
    if (station === "NY" || station === "CHI") {
      const newScooter = new Scooter(station);
      this.stations[station].push(newScooter);
      Scooter.station = station;
      console.log("created new scooter");
      return newScooter;
    } else if (station === "LA" || station === "West Loop") {
      const newScooter = new Scooter(station);
      this.stations[station].push(newScooter);
      Scooter.station = station;
      console.log("created new scooter");
      return newScooter;
    } else {
      throw new Error("no such station");
    }
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw "no such station";
    }
    if (this.stations[station].includes(scooter)) {
      throw "scooter already at station";
    }

    this.stations[station].push(scooter);
    scooter.dock(station);
    console.log(`scooter is docked at ${station}`);
  }

  rentScooter(scooter, user) {
    if (!scooter.station) {
      throw new Error("scooter already rented");
    } else if (!this.stations[scooter.station]) {
      throw new Error("no such station");
    }

    for (let i = 0; i < this.stations[scooter.station].length; i++){
      if (this.stations[scooter.station][i] === scooter){
        this.stations[scooter.station].splice(i, "");
        console.log(`scooter from ${scooter.station} is rented to ${user.username}`);
        scooter.station = null;
        scooter.user = user;
        return
      }
    }
  }

  print() {
    console.log(`List of registered users 
          ${this.registeredUser}`);
    console.log(`List of stations 
          ${this.stations}`);
  }
}

module.exports = ScooterApp;
