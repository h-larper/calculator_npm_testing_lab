const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 91;
    actual = sum(45, 46);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -12;
    actual = sum(-7, -5);
    expect(actual).toBe(expected);
  
  });

  test('can add zero', () => {
    expected = 10;
    actual = sum(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two positive numbers', () => {
    expected = 15;
    actual = subtract(20, 5);
    expect(actual).toBe(expected);
  });
  test('can subtract two large numbers', () => {
    expected = 1150;
    actual = subtract(1300, 150);
    expect(actual).toBe(expected);
  });
  test.skip('can subtract two negaive numbers', () => {

  });

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
