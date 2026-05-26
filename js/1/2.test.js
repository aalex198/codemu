const { getFirstDigit, getLastDigit } = require("./2");

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

describe("Функция getLastDigit", () => {
  test("Положительне", () => {
    expect(getLastDigit(1)).toBe(1);
  });
  test("Большое Положительне", () => {
    expect(getLastDigit(977715)).toBe(5);
  });
  test("Отрицательное", () => {
    expect(getLastDigit(-1)).toBe(1);
  });
  test("Большое Отрицательное", () => {
    expect(getLastDigit(-1115977716)).toBe(6);
  });
  test("Дробное", () => {
    expect(getLastDigit(11.22)).toBe(2);
  });
  test("Дробное Отрицательное", () => {
    expect(getLastDigit(-11.22)).toBe(2);
  });
  test("Аргумент не число (не тип number)", () => {
    expect(() => getLastDigit("")).toThrow(TypeError);
    expect(() => getLastDigit("12")).toThrow(TypeError);
    expect(() => getLastDigit("ss")).toThrow(TypeError);
    expect(() => getLastDigit(null)).toThrow(TypeError);
    expect(() => getLastDigit()).toThrow(TypeError);
    expect(() => getLastDigit(NaN)).toThrow(TypeError);
    expect(() => getLastDigit({})).toThrow(TypeError);
    expect(() => getLastDigit([])).toThrow(TypeError);
    expect(() => getLastDigit(Infinity)).toThrow(TypeError);
  });
});
