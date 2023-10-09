class Scooter {
  static nextSerial = 0;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {

    if (this.isBroken) {
      throw new Error("scooter needs repair");
    } else if(this.charge <= 20){
      throw new Error("scooter needs to charge");
    } 
    // else if (!this.isBroken && this.charge > 20) {
      this.user = user;
      this.station = null;
    // }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }
}

module.exports = Scooter;
