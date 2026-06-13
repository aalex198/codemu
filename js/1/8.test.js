const { getFilledNumsArray } = require("./8.js");

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
