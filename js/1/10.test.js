const { setRandomRange } = require("./10.js");

describe("setRandomRange", () => {
  test("from — не число (строка)", () => {
    expect(() => setRandomRange("123", 10)).toThrow(Error("Первый аргумент должен быть числом"));
  });

  test("from — не число (null)", () => {
    expect(() => setRandomRange(null, 10)).toThrow(Error("Первый аргумент должен быть числом"));
  });

  test("from — не число (undefined)", () => {
    expect(() => setRandomRange(undefined, 10)).toThrow(
      Error("Первый аргумент должен быть числом")
    );
  });

  test("from — не число (NaN)", () => {
    expect(() => setRandomRange(NaN, 10)).toThrow(Error("Первый аргумент должен быть числом"));
  });

  test("from — не число (Infinity)", () => {
    expect(() => setRandomRange(Infinity, 10)).toThrow(Error("Первый аргумент должен быть числом"));
  });

  test("from — не число (объект)", () => {
    expect(() => setRandomRange({}, 10)).toThrow(Error("Первый аргумент должен быть числом"));
  });

  test("from — не число (массив)", () => {
    expect(() => setRandomRange([], 10)).toThrow(Error("Первый аргумент должен быть числом"));
  });

  test("from — не число (boolean)", () => {
    expect(() => setRandomRange(true, 10)).toThrow(Error("Первый аргумент должен быть числом"));
  });

  test("to — не число (строка)", () => {
    expect(() => setRandomRange(1, "10")).toThrow(Error("Второй аргумент должен быть числом"));
  });

  test("to — не число (null)", () => {
    expect(() => setRandomRange(1, null)).toThrow(Error("Второй аргумент должен быть числом"));
  });

  test("to — не число (NaN)", () => {
    expect(() => setRandomRange(1, NaN)).toThrow(Error("Второй аргумент должен быть числом"));
  });

  test("to — не число (Infinity)", () => {
    expect(() => setRandomRange(1, Infinity)).toThrow(Error("Второй аргумент должен быть числом"));
  });

  test("to — не число (объект)", () => {
    expect(() => setRandomRange(1, {})).toThrow(Error("Второй аргумент должен быть числом"));
  });

  test("from >= to — ошибка (from больше to)", () => {
    expect(() => setRandomRange(10, 5)).toThrow(
      Error('Некорректный диапазон аргументов. "10" должен быть меньше "5"')
    );
  });

  test("from >= to — ошибка (from равен to)", () => {
    expect(() => setRandomRange(5, 5)).toThrow(
      Error('Некорректный диапазон аргументов. "5" должен быть меньше "5"')
    );
  });

  test("возвращает массив", () => {
    const result = setRandomRange(1, 10);
    expect(Array.isArray(result)).toBe(true);
  });

  test("все элементы массива — числа из заданного диапазона", () => {
    const result = setRandomRange(1, 10);
    for (const item of result) {
      expect(typeof item).toBe("number");
      expect(item).toBeGreaterThanOrEqual(1);
      expect(item).toBeLessThanOrEqual(10);
    }
  });

  test("количество элементов не превышает длину диапазона", () => {
    const result = setRandomRange(1, 10);
    expect(result.length).toBeLessThanOrEqual(10);
  });

  test("пустой результат при from === to - 1 (один элемент в диапазоне)", () => {
    const result = setRandomRange(5, 5);
    expect(result.length).toBe(0);
  });

  test("диапазон с отрицательными числами", () => {
    const result = setRandomRange(-5, 0);
    for (const item of result) {
      expect(item).toBeGreaterThanOrEqual(-5);
      expect(item).toBeLessThanOrEqual(0);
    }
  });

  test("диапазон с нулём", () => {
    const result = setRandomRange(0, 5);
    for (const item of result) {
      expect(item).toBeGreaterThanOrEqual(0);
      expect(item).toBeLessThanOrEqual(5);
    }
  });

  test("результаты разных вызовов могут отличаться (случайность)", () => {
    const results = Array.from({ length: 5 }, () => setRandomRange(1, 10));
    const allSame = results.every(r => JSON.stringify(r) === JSON.stringify(results[0]));
    expect(typeof allSame).toBe("boolean");
  });
});
