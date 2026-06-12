const { stringToArray, numToArray, reverseDigit, sumDigits } = require("./7.js");

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

describe("reverseDigit", () => {
  test("Числа", () => {
    expect(reverseDigit(123)).toEqual(321);
    expect(reverseDigit(0)).toEqual(0);
    expect(reverseDigit(1)).toEqual(1);
  });

  test("не число в аргументе — ошибка", () => {
    expect(() => reverseDigit("123")).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => reverseDigit()).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => reverseDigit(null)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => reverseDigit(NaN)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => reverseDigit(Infinity)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => reverseDigit({})).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => reverseDigit([])).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => reverseDigit(false)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => reverseDigit(true)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => reverseDigit("")).toThrow(TypeError("Аргумент должен быть числом!"));
  });
});

describe("sumDigits", () => {
  test("Числа", () => {
    expect(sumDigits(12)).toBe(3);
    expect(sumDigits(99)).toBe(18);
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(1)).toBe(1);
  });

  test("отрицательное число — ошибка", () => {
    expect(() => sumDigits(-2)).toThrow(Error("Число должно быть положительным!"));
  });

  test("не число в аргументе — ошибка", () => {
    expect(() => sumDigits("123")).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => sumDigits()).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => sumDigits(null)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => sumDigits(NaN)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => sumDigits(Infinity)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => sumDigits({})).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => sumDigits([])).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => sumDigits(false)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => sumDigits(true)).toThrow(TypeError("Аргумент должен быть числом!"));
    expect(() => sumDigits("")).toThrow(TypeError("Аргумент должен быть числом!"));
  });
});
