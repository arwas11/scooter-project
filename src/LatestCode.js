
// ked out by a User
class Scooter {
  // static nextSerial = 1;
  //, user = null, serial, charge, isBroken
  constructor(station = null, user = null, serial, charge, isBroken) {
      this.station = station;
      this.user = user;
      this.serial = serial;
      // this.nextSerial = nextSerial; nextSerial
      this.charge = 0;
      this.isBroken = isBroken;
  }

  rent(user) {
      //Accepts a user instance of the User class as an argument.???
      this.user = user;
      if (this.isBroken || this.charge <= 20) {
          throw new Error('scooter needs to charge or scooter needs repair')
      } else if (this.isBroken === false && this.charge > 20) {
          // If the Scooter is charged above 20% and not broken, remove it from its station, check it out to the user.
          this.station = null;
      }

  }

  dock(station) {
      this.station = station;
      delete this.user;
      // return this.station;
  }
}


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
          throw new Error('incorrect password')
      }
  }

  logout() {
      this.loggedIn = !this.loggedIn; //CHECK HERE IF CHANGED
  }

}

//app Users have on their phone
//keep track:
//registered users
//all scooters AND scooter status 
// Methods responding to User action. Example, looginig in OR returning a scoote
class ScooterApp {
  constructor(stations, registeredUsers) {
      this.stations = {
          //key = name of station location
          //value = array of scooters
          NYC: [],
          LA: [],
          CHI: [],
      }
      this.registeredUsers = {
          // username, 
          // it should add the username w/t specific username key which might save only one
          // it will refer to the user class??
      }
  }

  registerUser(username, password, age) {
      if (age <= 18) {
          throw new Error('too young to register');
      }
      if (Object.hasOwn(this.registeredUser, username) === false && age > 18) {
          this.registeredUser = username;
          console.log('user has been registered')
          return this.registeredUsers.username; //to return user info
      } else {
          throw new Error('already registered');
      }

  }

  loginUser(username, password) {
      // let registeredObj;
      let thisUser;
      if (Object.hasOwn(this.registeredUser, username)) {
          // registeredObj = this.registeredUsers;
          thisUser = this.registeredUsers.username;
          thisUser.login(password)
          console.log('user has been logged in');
          //     if () {
          //     console.log('user has been logged in');
          // } else {
          //     throw new Error("Username or password is incorrect")
          // }
      } else {
          throw new Error("Username or password is incorrect")
      }


  }

  logoutUser(username) {
      let thisUser;
      if (Object.hasOwn(this.registeredUser, username)) {
          // registeredObj = this.registeredUsers;
          thisUser = this.registeredUsers.username;
          thisUser.logout()
          console.log('user is logged out');
      } else {
          throw new Error("no such user is logged in")
      }


      // if (this.registeredUsers.username.loggedIn === false) {
      //     console.log('user is logged out');
      // }

  }

  createScooter(station) {
      // let num = 0;
      if (station === NY || station === CHI) {
          const newScooter = new Scooter(station)
          this.stations.station.push(newScooter)
          newScooter.station = station;
          console.log('created new scooter');
          return newScooter
      } else if (station === LA) {
          const newScooter = new Scooter(station)
          this.stations.station.push(newScooter)
          newScooter.station = station;
          console.log('created new scooter');
          return newScooter
      } else {
          throw new Error('no such station error'); //might not need word error
      }


  }

  dockScooter(scooter, station) {

      if (!this.stations.includes(station)) {
          throw new Error('scooter already at station')
      }


      if (station === NY || station === CHI) {
          this.stations.station.push(scooter)
          scooter.dock(station);

          console.log('scooter is docked');
      } else if (station === LA) {
          this.stations.station.push(scooter)
          scooter.dock(station);
          console.log('scooter is docked');
      } else {
          throw new Error('no such station')
      }

  }

  rentScooter(scooter, user) {
      let thisUser;
      if (Object.hasOwn(this.registeredUser, username)) {
          // registeredObj = this.registeredUsers;
          thisUser = this.registeredUsers.username;
      }
      if (scooter.station === NY || scooter.station === CHI) {
          scooter.station = null;
          if (scooter.rent(thisUser)) {
              console.log('scooter is rented');
          } else {
              throw new Error('scooter already rented')
          }

      } else if (scooter.station === LA) {
          scooter.station = null;
      } else {
          throw new Error('no such station error'); //might not need word error
      }
  }

  print() {
      console.log(`The list of registered users 
      ${this.registerUser}`);
      console.log(`The list of stations 
      ${this.stations}`);
  }

}


console.log(Scooter.serial)
console.log(User)
console.log(ScooterApp)



