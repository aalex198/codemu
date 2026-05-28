const { getLastChar, isDivisible } = require("./3");

describe("Функция getLastChar", () => {
  test("abc", () => {
    expect(getLastChar("abc")).toBe("b");
  });
  test("abc123", () => {
    expect(getLastChar("abc123")).toBe("2");
  });
  test("null", () => {
    expect(getLastChar("null")).toBe("l");
  });
  test("Один символ", () => {
    expect(getLastChar("a")).toBe("a");
  });
  test("Пустая строка", () => {
    expect(getLastChar("")).toBe("");
  });

  test("Передано не строка — выбрасывает ошибку", () => {
    expect(() => getLastChar(0)).toThrow(TypeError);
    expect(() => getLastChar(-1)).toThrow(TypeError);

    expect(() => getLastChar(null)).toThrow(TypeError);
    expect(() => getLastChar()).toThrow(TypeError);
    expect(() => getLastChar({})).toThrow(TypeError);
    expect(() => getLastChar([])).toThrow(TypeError);
    expect(() => getLastChar(NaN)).toThrow(TypeError);
    expect(() => getLastChar(Infinity)).toThrow(TypeError);
  });
});

describe("Функция isDivisible", () => {
  test("Делится без остатка", () => {
    expect(isDivisible(10, 5)).toBe(true);
    expect(isDivisible(12, 4)).toBe(true);
    expect(isDivisible(100, 25)).toBe(true);
    expect(isDivisible(7, 7)).toBe(true);
  });

  test("Не делится без остатка", () => {
    expect(isDivisible(10, 4)).toBe(false);
    expect(isDivisible(10, 3)).toBe(false);
    expect(isDivisible(100, 30)).toBe(false);
    expect(isDivisible(7, 5)).toBe(false);
  });

  test("Деление на ноль выбрасывает ошибку", () => {
    expect(() => isDivisible(10, 0)).toThrow("На ноль делить нельзя!");
  });

  test("Передано не число — выбрасывает ошибку", () => {
    expect(() => isDivisible("", null)).toThrow(TypeError);
    expect(() => isDivisible("abc", 1)).toThrow(TypeError);
    expect(() => isDivisible(2, "abc")).toThrow(TypeError);

    expect(() => isDivisible(null, 1)).toThrow(TypeError);
    expect(() => isDivisible()).toThrow(TypeError);
    expect(() => isDivisible({}, 1)).toThrow(TypeError);
    expect(() => isDivisible(2, [])).toThrow(TypeError);
    expect(() => isDivisible(3, NaN)).toThrow(TypeError);
    expect(() => isDivisible(Infinity, 5)).toThrow(TypeError);
  });
});
