const { getFirstDigit } = require("./2");

describe("Функция getFirstDigit", () => {
  test("Отрицательное", () => {
    expect(getFirstDigit(-1)).toBe(1);
  });
  test("Большое Отрицательное", () => {
    expect(getFirstDigit(-991)).toBe(9);
  });

  test("Положительное", () => {
    expect(getFirstDigit(1)).toBe(1);
  });
  test("Большое Положительное", () => {
    expect(getFirstDigit(85551)).toBe(8);
  });
  test("Ноль", () => {
    expect(getFirstDigit(0)).toBe(0);
  });
  test("Ноль с дробью", () => {
    expect(getFirstDigit(0.123)).toBe(0);
  });
  test("Дробное", () => {
    expect(getFirstDigit(923.456)).toBe(9);
  });

  test("Передано не число — выбрасывает ошибку", () => {
    expect(() => getFirstDigit("")).toThrow(TypeError);
    expect(() => getFirstDigit("abc")).toThrow(TypeError);

    expect(() => getFirstDigit(null)).toThrow(TypeError);
    expect(() => getFirstDigit()).toThrow(TypeError);
    expect(() => getFirstDigit({})).toThrow(TypeError);
    expect(() => getFirstDigit([])).toThrow(TypeError);
    expect(() => getFirstDigit(NaN)).toThrow("Аргумент должен быть конечным числом");
    expect(() => getFirstDigit(Infinity)).toThrow("Аргумент должен быть конечным числом");
  });
});
