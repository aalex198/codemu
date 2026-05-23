const {
    isNegative,
} = require('./1');

describe('Функция isNegative', () => { 

  test('Отрицательное', () => {
    expect(isNegative(-1)).toBe(true);
  });

  test('Ноль', () => {
    expect(isNegative(0)).toBe(false);
  });

  test('Положительное', () => {
    expect(isNegative(1)).toBe(false);
  });

  test('Большое положительное', () => {
    expect(isNegative(99)).toBe(false);
  });

  test('Большое отрицательное', () => {
    expect(isNegative(22299)).toBe(false);
  });
});