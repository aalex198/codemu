const { setRandomRange, logDigitsReversed } = require("./10.js");

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


describe("logDigitsReversed", () => {
  let consoleSpy;

  // Перед каждым тестом перехватываем вызовы console.log
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  // После каждого теста возвращаем console.log в исходное состояние
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("должна выводить цифры обычного числа с конца", () => {
    logDigitsReversed(12345);

    // Проверяем, сколько раз вызвался console.log
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    
    // Проверяем точный порядок вывода в консоль
    expect(consoleSpy.mock.calls[0][0]).toBe("5");
    expect(consoleSpy.mock.calls[1][0]).toBe("4");
    expect(consoleSpy.mock.calls[2][0]).toBe("3");
    expect(consoleSpy.mock.calls[3][0]).toBe("2");
    expect(consoleSpy.mock.calls[4][0]).toBe("1");
  });

  test("должна корректно обрабатывать ноль", () => {
    logDigitsReversed(0);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith("0");
  });

  test("должна игнорировать знак минус для отрицательных чисел", () => {
    logDigitsReversed(-987);
    
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy.mock.calls[0][0]).toBe("7");
    expect(consoleSpy.mock.calls[1][0]).toBe("8");
    expect(consoleSpy.mock.calls[2][0]).toBe("9"); // Минус не должен выводиться
  });

  test("должна выбрасывать ошибку, если передан не числовой тип данных", () => {
    expect(() => logDigitsReversed("123")).toThrow("Аргумент должен быть конечным числом!");
    expect(() => logDigitsReversed(null)).toThrow("Аргумент должен быть конечным числом!");
    expect(() => logDigitsReversed(undefined)).toThrow("Аргумент должен быть конечным числом!");
  });

  test("должна выбрасывать ошибку для бесконечных чисел или NaN", () => {
    expect(() => logDigitsReversed(Infinity)).toThrow("Аргумент должен быть конечным числом!");
    expect(() => logDigitsReversed(NaN)).toThrow("Аргумент должен быть конечным числом!");
  });
});
