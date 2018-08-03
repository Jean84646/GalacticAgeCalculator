import { galacticAgeCalculator } from './../src/galacticAgeCalculator.js';

describe('galacticAgeCalculator', function() {
  let testUser;

  beforeEach(function() {
    testUser = new galacticAgeCalculator(1, "2018-8-2");
  });

  it('should convert age in years into seconds', function() {
    expect(testUser.ageInSeconds()).toEqual(31536000);
  });

  // it('should find the difference between two dates in seconds', function() {
  //   let currentDate = new Date();
  //   expect(compareDate(testUser.birthday, currentDate).toEqual(31536000);
  // });

  it('should find age in Mercury years in seconds', function() {
    expect(testUser.mercuryYears()).toEqual(.24);
  });

  it('should find age in Venus years in seconds', function() {
    expect(testUser.venusYears()).toEqual(.62);
  });

  it('should find age in Mars years in seconds', function() {
    expect(testUser.marsYears()).toEqual(1.88);
  });

  it('should find age in Jupiter years in seconds', function() {
    expect(testUser.jupiterYears()).toEqual(11.86);
  });

  it('should find years left to live', function() {
    let lifeExpectancy = 100;
    expect(testUser.expectToLive(lifeExpectancy)).toEqual(99);
  });

  it('should find years exceeds life expectancy', function() {
    let testUserTwo = new galacticAgeCalculator(101, "1918-8-3");
    let lifeExpectancy = 100;
    expect(testUserTwo.expectToLive(lifeExpectancy)).toEqual(1);
  });

});
