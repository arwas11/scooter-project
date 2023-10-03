class Scooter {
  constructor(station = null, user = null, serial = 1, charge, isBroken) {
    this.station = station;
    this.user = user;
    this.serial = this.nextSerial + 1;
    // this.nextSerial = nextSerial; nextSerial
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    this.user = user;
    if (this.isBroken || this.charge <= 20) {
      throw new Error("scooter needs to charge or scooter needs repair");
    } else if (this.isBroken === false && this.charge > 20) {
      this.station = null;
    }
  }

  dock(station) {
    this.station = station;
    delete this.user;
  }
}

module.exports = Scooter;
