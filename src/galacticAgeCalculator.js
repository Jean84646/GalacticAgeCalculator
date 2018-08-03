export class galacticAgeCalculator {
  constructor(age, birthday) {
    this.age = age;
    this.birthday = birthday;
  }

  ageInSeconds(){
    debugger;
    return this.age * 365 * 24 * 3600;
  }

}
