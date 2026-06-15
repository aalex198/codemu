const { getFilledNumsArray, getRangeOfNaturalDigit, roundToFirstDecimal } = require("./8.js");

describe("getFilledNumsArray", () => {
  test("Числа", () => {
    expect(getFilledNumsArray(1, 2)).toEqual([1, 2]);
    expect(getFilledNumsArray(1, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(getFilledNumsArray(-1, 1)).toEqual([-1, 0, 1]);
    expect(getFilledNumsArray(0, 3)).toEqual([0, 1, 2, 3]);
  });

  test("отрицательное число — ошибка", () => {
    expect(() => getFilledNumsArray(9, 1)).toThrow(
      Error('Ошибка диапазона: число "9" должно быть меньше числа "1"')
    );
  });

  test("не число в аргументе — ошибка", () => {
    expect(() => getFilledNumsArray("123")).toThrow(TypeError('Аргумент "123" должен быть числом'));
    expect(() => getFilledNumsArray(1, "456")).toThrow(
      TypeError('Аргумент "456" должен быть числом')
    );
    expect(() => getFilledNumsArray()).toThrow(
      TypeError('Аргумент "undefined" должен быть числом')
    );
    expect(() => getFilledNumsArray(null)).toThrow(TypeError('Аргумент "null" должен быть числом'));
    expect(() => getFilledNumsArray(1, null)).toThrow(
      TypeError('Аргумент "null" должен быть числом')
    );
    expect(() => getFilledNumsArray(NaN)).toThrow(TypeError('Аргумент "NaN" должен быть числом'));
    expect(() => getFilledNumsArray(4, NaN)).toThrow(
      TypeError('Аргумент "NaN" должен быть числом')
    );
    expect(() => getFilledNumsArray(Infinity)).toThrow(
      TypeError('Аргумент "Infinity" должен быть числом')
    );
    expect(() => getFilledNumsArray({})).toThrow(
      TypeError('Аргумент "[object Object]" должен быть числом')
    );
    expect(() => getFilledNumsArray(["abc"])).toThrow(
      TypeError('Аргумент "abc" должен быть числом')
    );
    expect(() => getFilledNumsArray(false)).toThrow(
      TypeError('Аргумент "false" должен быть числом')
    );
    expect(() => getFilledNumsArray(true)).toThrow(TypeError('Аргумент "true" должен быть числом'));
    expect(() => getFilledNumsArray("")).toThrow(TypeError('Аргумент "" должен быть числом'));
  });
});

describe("getRangeOfNaturalDigit", () => {
  test("Числа", () => {
    expect(getRangeOfNaturalDigit(1, 2)).toEqual([2]);
    expect(getRangeOfNaturalDigit(1, 9)).toEqual([2, 4, 6, 8]);
    expect(getRangeOfNaturalDigit(-1, 1)).toEqual([0]);
    expect(getRangeOfNaturalDigit(2.44, 9.6)).toEqual([4, 6, 8]);
  });

  describe("Обработка ошибок", () => {
    test("Переданы не числа", () => {
      expect(() => getRangeOfNaturalDigit("10", 3)).toThrow(TypeError);
      expect(() => getRangeOfNaturalDigit(10, "3")).toThrow(TypeError);
      expect(() => getRangeOfNaturalDigit(null, 3)).toThrow(TypeError);
      expect(() => getRangeOfNaturalDigit(10, null)).toThrow(TypeError);
      expect(() => getRangeOfNaturalDigit(undefined, 3)).toThrow(TypeError);
      expect(() => getRangeOfNaturalDigit(10, undefined)).toThrow(TypeError);
      expect(() => getRangeOfNaturalDigit({}, 3)).toThrow(TypeError);
      expect(() => getRangeOfNaturalDigit(10, [])).toThrow(TypeError);
    });

    test("Некоректный диапазон", () => {
      expect(() => getRangeOfNaturalDigit(1, 1)).toThrow(Error("Некорректный диапазон!"));
      expect(() => getRangeOfNaturalDigit(10, 1)).toThrow(Error("Некорректный диапазон!"));
    });
  });
});

describe("roundToFirstDecimal", () => {
  test("Числа", () => {
    expect(roundToFirstDecimal([1.456, 2.125, 3.32, 4.1, 5.34])).toEqual([1.4, 2.1, 3.3, 4.1, 5.3]);
    expect(roundToFirstDecimal([-1.456, 2.125, -4.1, 0.34])).toEqual([-1.4, 2.1, -4.1, 0.3]);
  });

  test("не массив чисел в аргументе — ошибка", () => {
    expect(() => roundToFirstDecimal(123)).toThrow(
      TypeError("Аргумент должен быть массивом чисел")
    );
    expect(() => roundToFirstDecimal()).toThrow(TypeError("Аргумент должен быть массивом чисел"));
    expect(() => roundToFirstDecimal([])).toThrow(TypeError("Аргумент должен быть массивом чисел"));
  });

  test("Элемент массива не число — ошибка", () => {
    expect(() => roundToFirstDecimal([1, NaN])).toThrow(
      TypeError(
        'Элемент "NaN" массива "1,NaN" индексом "1" должен быть конечным числом! А его тип - "number"'
      )
    );
    expect(() => roundToFirstDecimal([NaN])).toThrow(
      TypeError(
        'Элемент "NaN" массива "NaN" индексом "0" должен быть конечным числом! А его тип - "number"'
      )
    );
    expect(() => roundToFirstDecimal([null])).toThrow(
      TypeError(
        'Элемент "null" массива "" индексом "0" должен быть конечным числом! А его тип - "object"'
      )
    );
    expect(() => roundToFirstDecimal([1, "abc"])).toThrow(
      TypeError(
        'Элемент "abc" массива "1,abc" индексом "1" должен быть конечным числом! А его тип - "string"'
      )
    );
    expect(() => roundToFirstDecimal([false])).toThrow(
      TypeError(
        'Элемент "false" массива "false" индексом "0" должен быть конечным числом! А его тип - "boolean"'
      )
    );
    expect(() => roundToFirstDecimal([Infinity])).toThrow(
      TypeError(
        'Элемент "Infinity" массива "Infinity" индексом "0" должен быть конечным числом! А его тип - "number"'
      )
    );
    expect(() => roundToFirstDecimal([{}])).toThrow(
      TypeError(
        'Элемент "[object Object]" массива "[object Object]" индексом "0" должен быть конечным числом! А его тип - "object"'
      )
    );
  });
});
