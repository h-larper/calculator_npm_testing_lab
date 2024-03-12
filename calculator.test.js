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
  test('can subtract two negative numbers', () => {
    expected = 2;
    actual = subtract(-10, -12);
    expect(actual).toBe(expected);
  });
});


describe('multiply', () => {
  test('can multiply two positive numbers', () => {
    expected = 49;
    actual = multiply(7, 7);
    expect(actual).toBe(expected);
  });
  test('can multiple two negative numbers', () => {
    expected = 80;
    actual = multiply(-8, -10);
    expect(actual).toBe(expected);
  });
  test('can multiply by 0', () => {
    expected = 0;
    actual = multiply(300000, 0);
    expect(actual).toBe(expected);
  });
});


describe('divide', () => {

});


describe('modulus', () => {

});


describe('even', () => {

});


describe('odd', () => {

});
