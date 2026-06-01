const { sumRange } = require("./5.js");

describe("sumRange", () => {
  test("сумма от 1 до 100", () => {
    expect(sumRange(1, 100)).toBe(5050);
  });

  test("сумма от 1 до 10", () => {
    expect(sumRange(1, 10)).toBe(55);
  });

  test("сумма от 5 до 10", () => {
    expect(sumRange(5, 10)).toBe(45);
  });

  test("один элемент", () => {
    expect(sumRange(5, 5)).toBe(5);
  });

  test("отрицательные числа", () => {
    expect(sumRange(-5, 5)).toBe(0);
  });

  test("некорректный диапазон", () => {
    expect(() => sumRange(10, 5)).toThrow();
  });
});
