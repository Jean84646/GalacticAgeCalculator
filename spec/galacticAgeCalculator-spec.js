import { galacticAgeCalculator } from './../src/galacticAgeCalculator.js';

describe('galacticAgeCalculator', function() {
  let testUser;
  let testUserTwo;

  beforeEach(function() {
    testUser = new galacticAgeCalculator(10, "2008/08/03", 100);
    testUserTwo = new galacticAgeCalculator(110, "2008-08-03", 100);
  });

  it('should convert age in years into seconds', function() {
    expect(testUser.ageInSeconds()).toEqual(315360000);
  });

  it('should find the difference between two dates in seconds', function() {
    let testDate1 = new Date("2008/08/05");
    expect(testUser.compareDateInSeconds(testDate1)).toEqual(172800);
  });

  it('should find age on Mercury', function() {
    expect(testUser.mercuryAge()).toEqual(41);
  });

  it('should find age on Venus', function() {
    expect(testUser.venusAge()).toEqual(16);
  });

  it('should find age on Mars', function() {
    expect(testUser.marsAge()).toEqual(5);
  });

  it('should find age on Jupiter', function() {
    expect(testUser.jupiterAge()).toEqual(0);
  });

  it('should find years left to live on earth', function() {
    let location = "earth";
    expect(testUser.expectToLive(location)).toEqual(90);
  });

  it('should find years exceeds life expectancy on earth', function() {
    let location = "earth";
    expect(testUserTwo.expectToLive(location)).toEqual(10);
  });

  it('should find years left to live on mercury', function() {
    let location = "mercury";
    expect(testUser.expectToLive(location)).toEqual(375);
  });

  it('should find years exceeds life expectancy on mercury', function() {
    let location = "mercury";
    expect(testUserTwo.expectToLive(location)).toEqual(42);
  });

  it('should find years left to live on venus', function() {
    let location = "venus";
    expect(testUser.expectToLive(location)).toEqual(145);
  });

  it('should find years exceeds life expectancy on venus', function() {
    let location = "venus";
    expect(testUserTwo.expectToLive(location)).toEqual(16);
  });

  it('should find years left to live on mars', function() {
    let location = "mars";
    expect(testUser.expectToLive(location)).toEqual(48);
  });

  it('should find years exceeds life expectancy on mars', function() {
    let location = "mars";
    expect(testUserTwo.expectToLive(location)).toEqual(5);
  });

  it('should find years left to live on jupiter', function() {
    let location = "jupiter";
    expect(testUser.expectToLive(location)).toEqual(8);
  });

  it('should find years exceeds life expectancy on jupiter', function() {
    let location = "jupiter";
    expect(testUserTwo.expectToLive(location)).toEqual(1);
  });

});
