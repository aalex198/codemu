const { getFirstDigit, getLastDigit, getSumFirstAndLastDigit, getDigitsCount } = require("./2");

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

describe("Функция getSumFirstAndLastDigit", () => {
  test("Положительне", () => {
    expect(getSumFirstAndLastDigit(12)).toBe(3);
  });
  test("Большое Положительне", () => {
    expect(getSumFirstAndLastDigit(5738369)).toBe(14);
  });
  test("Отрицательное", () => {
    expect(getSumFirstAndLastDigit(-12)).toBe(3);
  });
  test("Большое Отрицательное", () => {
    expect(getSumFirstAndLastDigit(-5738369)).toBe(14);
  });
  test("Ноль", () => {
    expect(getSumFirstAndLastDigit(0)).toBe(0);
  });
  test("Однозначное Положительное", () => {
    expect(getSumFirstAndLastDigit(4)).toBe(4);
  });
  test("Однозначное Отрицательное", () => {
    expect(getSumFirstAndLastDigit(-4)).toBe(4);
  });
  test("Дробное положительное", () => {
    expect(getSumFirstAndLastDigit(11.33)).toBe(4);
  });
  test("Дробное отрицательное", () => {
    expect(getSumFirstAndLastDigit(-21.35)).toBe(7);
  });
  test("Дробное с нулем", () => {
    expect(getSumFirstAndLastDigit(0.35)).toBe(5);
  });
  test("Дробное отрицательное с нулем", () => {
    expect(getSumFirstAndLastDigit(-0.1)).toBe(1);
  });
  test("Аргумент не число (не тип number)", () => {
    expect(() => getSumFirstAndLastDigit("")).toThrow(TypeError);
    expect(() => getSumFirstAndLastDigit("12")).toThrow(TypeError);
    expect(() => getSumFirstAndLastDigit("ss")).toThrow(TypeError);
    expect(() => getSumFirstAndLastDigit(null)).toThrow(TypeError);
    expect(() => getSumFirstAndLastDigit()).toThrow(TypeError);
    expect(() => getSumFirstAndLastDigit(NaN)).toThrow(TypeError);
    expect(() => getSumFirstAndLastDigit({})).toThrow(TypeError);
    expect(() => getSumFirstAndLastDigit([])).toThrow(TypeError);
    expect(() => getSumFirstAndLastDigit(Infinity)).toThrow(TypeError);
  });
});

describe("Функция getDigitsCount", () => {
  test("Ноль", () => {
    expect(getDigitsCount(0)).toBe(1);
  });
  test("Положительне однозначное", () => {
    expect(getDigitsCount(1)).toBe(1);
  });
  test("Положительне двузначное", () => {
    expect(getDigitsCount(12)).toBe(2);
  });
  test("Положительне большое", () => {
    expect(getDigitsCount(928564)).toBe(6);
  });
  test("Отрицательное однозначное", () => {
    expect(getDigitsCount(-1)).toBe(1);
  });
  test("Отрицательное двузначное", () => {
    expect(getDigitsCount(-12)).toBe(2);
  });
  test("Положительне большое", () => {
    expect(getDigitsCount(-928564)).toBe(6);
  });
  test("Аргумент не число (не тип number)", () => {
    expect(() => getDigitsCount("")).toThrow(TypeError);
    expect(() => getDigitsCount("12")).toThrow(TypeError);
    expect(() => getDigitsCount("ss")).toThrow(TypeError);
    expect(() => getDigitsCount(null)).toThrow(TypeError);
    expect(() => getDigitsCount()).toThrow(TypeError);
    expect(() => getDigitsCount(NaN)).toThrow(TypeError);
    expect(() => getDigitsCount({})).toThrow(TypeError);
    expect(() => getDigitsCount([])).toThrow(TypeError);
    expect(() => getDigitsCount(Infinity)).toThrow(TypeError);
  });
});
