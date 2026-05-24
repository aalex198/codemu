const {
    isNegative,
    stringLength,
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

  test('Передано не число — выбрасывает ошибку', () => {
      expect(() => isNegative('')).toThrow(TypeError);
      expect(() => isNegative('abc')).toThrow('Параметр должен быть числом');
  });

});

describe('Функция stringLength', () => { 

  test('2 символа', () => {
    expect(stringLength('ss')).toBe(2);
  });

  test('5 символов', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test('0 символов', () => {
    expect(stringLength('')).toBe(0);
  });

  test('Передано не строка — выбрасывает ошибку', () => {
    expect(() => stringLength()).toThrow(TypeError);
    expect(() => stringLength(22)).toThrow('Параметр должен быть строкой');
    expect(() => stringLength(null)).toThrow('Параметр должен быть строкой');
    expect(() => stringLength(NaN)).toThrow('Параметр должен быть строкой');
  });
});