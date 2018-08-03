export class galacticAgeCalculator {
  constructor(age, birthday) {
    this.age = age;
    this.birthday = birthday;
  }

  ageInSeconds() {
    debugger;
    return this.age * 365 * 24 * 3600;
  }

  mercuryYears() {
    return this.age * .24;
  }

  venusYears() {
    return this.age * .62;
  }

  marsYears() {
    return this.age * 1.88;
  }

  jupiterYears() {
    return this.age * 11.86;
  }

  expectToLive(lifeExpectancy) {
    if (this.age < lifeExpectancy) {
      return lifeExpectancy - this.age;
    } else {
      return this.age - lifeExpectancy;
    }
  }

}
