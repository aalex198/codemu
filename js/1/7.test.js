const { stringToArray, numToArray } = require("./7.js");

describe("stringToArray", () => {
  test("Строки", () => {
    expect(stringToArray("abcde")).toEqual(["a", "b", "c", "d", "e"]);
    expect(stringToArray("123")).toEqual(["1", "2", "3"]);
    expect(stringToArray("")).toEqual([""]);
  });

  test("число в аргументе — ошибка", () => {
    expect(() => stringToArray(1)).toThrow(TypeError("Аргумент должен быть строкой"));
  });

  test("undefined в аргументе — ошибка", () => {
    expect(() => stringToArray()).toThrow(TypeError("Аргумент должен быть строкой"));
  });
});

describe("numToArray", () => {
  test("Числа", () => {
    expect(numToArray(123)).toEqual([1, 2, 3]);
    expect(numToArray(0)).toEqual([0]);
    expect(numToArray(1)).toEqual([1]);
  });

  test("не число в аргументе — ошибка", () => {
    expect(() => numToArray("123")).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => numToArray()).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => numToArray(null)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => numToArray(NaN)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => numToArray(Infinity)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => numToArray({})).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => numToArray([])).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => numToArray(false)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => numToArray(true)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => numToArray("")).toThrow(TypeError("Аргумент должен быть числом!"));
  });
});
