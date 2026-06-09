const { stringToArray } = require("./7.js");

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
