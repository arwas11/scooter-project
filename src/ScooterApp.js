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
    if (Object.hasOwn(this.registeredUser[username]) === false && age > 18) {
      const user = new User(username, password, age)
      this.registeredUser[username] = user;
      console.log("user has been registered");
      return user; //to return user info
    } else {
      throw new Error("already registered");
    }
  }

  loginUser(username, password) {
    let thisUser = this.registeredUser[username];
    if (Object.hasOwn(this.registeredUser, username)) {
      thisUser.login(password);
      console.log("user has been logged in");
    } else {
      throw new Error("Username or password is incorrect");
    }
  }

  logoutUser(username) {
    let thisUser = this.registeredUser[username];
    if (Object.hasOwn(this.registeredUser, username)) {
      thisUser.logout();
      console.log("user is logged out");
    } else {
      throw new Error("no such user is logged in");
    }
  }

  createScooter(station) {
      if (station === "NY" || station === "CHI") {
        const newScooter = new Scooter(station);
        this.stations[station].push(newScooter)
        Scooter.station = station;
        console.log("created new scooter");
          return newScooter
      } else if (station === "LA" || station === "West Loop") {
        const newScooter = new Scooter(station);
        this.stations[station].push(newScooter)
        Scooter.station = station;
        console.log("created new scooter");
          return newScooter
      } else {
          throw new Error('no such station'); 
      }
  }

  dockScooter(scooter, station) {
    if (!this.stations.includes(station)) {
      throw new Error("scooter already at station");
    }

    if (station === "NY" || station === "CHI") {
      this.stations[station].push(scooter);
      scooter.dock(station);
      console.log("scooter is docked");
    } else if (station === "LA" || station === "West Loop") {
      this.stations[station].push(scooter);
      scooter.dock(station);
      console.log("scooter is docked");
    } else {
      throw new Error("no such station");
    }
  }

  // rentScooter(scooter, user) {
  //   let thisUser;
  //   if (Object.hasOwn(this.registeredUser, user)) {
  //     // registeredObj = this.registeredUsers;
  //     thisUser = this.registeredUsers.user;
  //   }
  //   if (scooter.station === "NY" || scooter.station === "CHI") {
  //     scooter.station = null;
  //     if (scooter.rent(thisUser)) {
  //       console.log("scooter is rented");
  //     } else {
  //       throw new Error("scooter already rented");
  //     }
  //   } else if (scooter.station === "LA") {
  //     scooter.station = null;
  //     if (scooter.rent(thisUser)) {
  //       console.log("scooter is rented");
  //     } else {
  //       throw new Error("scooter already rented");
  //     }
  //   } else {
  //     throw new Error("no such station error"); //might not need word error
  //   }
  // }

  print() {
    console.log(`The list of registered users 
          ${this.registeredUser}`);
    console.log(`The list of stations 
          ${this.stations}`);
  }
}

module.exports = ScooterApp;
