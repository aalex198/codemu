const { sumOfSquares } = require("./6.js");

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
