const { sumOfSquares, getSumOfSquareRoots } = require("./6.js");

describe("sumOfSquares", () => {
  test("обычные числа", () => {
    expect(sumOfSquares([1, 2, 3])).toBe(14);
    expect(sumOfSquares([2, 3, 4])).toBe(29);
  });

  test("пустой массив", () => {
    expect(sumOfSquares([])).toBe(0);
  });

  test("строки с числами", () => {
    expect(sumOfSquares([1, "2", 3])).toBe(14);
  });

  test("отрицательные числа", () => {
    expect(sumOfSquares([-1, -2, -3])).toBe(14);
  });

  test("нечисловые строки — ошибка", () => {
    expect(() => sumOfSquares([1, "abc", 3])).toThrow(TypeError);
  });

  test("не массив — ошибка", () => {
    expect(() => sumOfSquares("not array")).toThrow(TypeError);
  });
});

describe("getSumOfSquareRoots", () => {
  test("обычные числа", () => {
    expect(getSumOfSquareRoots([4, 9, 16])).toBe(9);
    expect(getSumOfSquareRoots([1, 4, 9])).toBe(6);
  });

  test("пустой массив", () => {
    expect(getSumOfSquareRoots([])).toBe(0);
  });

  test("ноль", () => {
    expect(getSumOfSquareRoots([0, 4])).toBe(2);
  });

  test("отрицательное число — ошибка", () => {
    expect(() => getSumOfSquareRoots([4, -9])).toThrow(Error);
  });

  test("не массив — ошибка", () => {
    expect(() => getSumOfSquareRoots("abc")).toThrow(TypeError);
  });

  test("не число в массиве — ошибка", () => {
    expect(() => getSumOfSquareRoots([4, "abc"])).toThrow(TypeError);
  });
});
