const { sumRange, sumOfEvenNumbers } = require("./5.js");

describe("sumRange", () => {
  test("Тип данных первого аргумента", () => {
    expect(() => sumOfEvenNumbers("abc", 5)).toThrow(TypeError);
  });
  test("Тип данных второго аргумента", () => {
    expect(() => sumOfEvenNumbers(10, NaN)).toThrow(TypeError);
  });
  test("некорректный диапазон", () => {
    expect(() => sumOfEvenNumbers(10, 5)).toThrow(Error);
  });

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

describe("sumOfEvenNumbers", () => {
  test("Тип данных первого аргумента", () => {
    expect(() => sumOfEvenNumbers("abc", 5)).toThrow("start должен быть числом, получено: abc");
  });
  test("Тип данных второго аргумента", () => {
    expect(() => sumOfEvenNumbers(10, NaN)).toThrow("end должен быть числом, получено: NaN");
  });
  test("некорректный диапазон", () => {
    expect(() => sumOfEvenNumbers(10, 5)).toThrow("start (10) должен быть <= end (5)");
  });

  // test("сумма от 1 до 100", () => {
  //   expect(sumOfEvenNumbers(1, 100)).toBe(5050);
  // });

  test("сумма от 1 до 10", () => {
    expect(sumOfEvenNumbers(1, 5)).toBe(6);
  });

  test("сумма от 5 до 10", () => {
    expect(sumOfEvenNumbers(2, 6)).toBe(12);
  });

  test("один элемент", () => {
    expect(sumOfEvenNumbers(0, 8)).toBe(20);
  });

  // test("отрицательные числа", () => {
  //   expect(sumOfEvenNumbers(-5, 5)).toBe(0);
  // });
});
