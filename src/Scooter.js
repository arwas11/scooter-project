class Scooter {
  static nextSerial = 0;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
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
    this.user = null;
  }
}

module.exports = Scooter;
