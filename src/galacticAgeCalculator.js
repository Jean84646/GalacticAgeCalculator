export class galacticAgeCalculator {
  constructor(age, birthday, lifeExpectancy) {
    this.age = age;
    this.birthday = birthday;
    this.lifeExpectancy = lifeExpectancy;
  }

  ageInSeconds() {
    return this.age * 365 * 24 * 3600;
  }

  compareDateInSeconds(date1) {
    let date2 = new Date(this.birthday);
    return Math.abs(date1 - date2) / 1000;
  }

  mercuryAge() {
    return Math.floor(this.age / .24);
  }

  venusAge() {
    return Math.floor(this.age / .62);
  }

  marsAge() {
    return Math.floor(this.age / 1.88);
  }

  jupiterAge() {
    return Math.floor(this.age / 11.86);
  }

  expectToLive(location) {
  const mercuryLifeExpectancy = Math.floor(this.lifeExpectancy / .24);
  const venusLifeExpectancy = Math.floor(this.lifeExpectancy / .62);
  const marsLifeExpectancy = Math.floor(this.lifeExpectancy / 1.88);
  const jupiterLifeExpectancy = Math.floor(this.lifeExpectancy / 11.86);

    if (location === "earth") {
        return Math.abs(this.lifeExpectancy - this.age);
    } else if (location === "mercury") {
        return Math.abs(mercuryLifeExpectancy - this.mercuryAge());
    } else if (location === "venus") {
        return Math.abs(venusLifeExpectancy - this.venusAge());
    } else if (location === "mars") {
        return Math.abs(marsLifeExpectancy - this.marsAge());
    } else {
        return Math.abs(jupiterLifeExpectancy - this.jupiterAge());
    }
  }
}
