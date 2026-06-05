const {
  sumRange,
  sumOfEvenNumbers,
  sumOfNoEvenNumbers,
  getRemainder,
  printLastCharsReverse,
} = require("./5.js");

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
});

describe("sumOfNoEvenNumbers", () => {
  test("Тип данных первого аргумента", () => {
    expect(() => sumOfNoEvenNumbers("abc", 5)).toThrow("start должен быть числом, получено: abc");
  });
  test("Тип данных второго аргумента", () => {
    expect(() => sumOfNoEvenNumbers(10, NaN)).toThrow("end должен быть числом, получено: NaN");
  });
  test("некорректный диапазон", () => {
    expect(() => sumOfNoEvenNumbers(10, 5)).toThrow("start (10) должен быть <= end (5)");
  });

  test("сумма от 1 до 10", () => {
    expect(sumOfNoEvenNumbers(1, 5)).toBe(9);
  });

  test("сумма от 5 до 10", () => {
    expect(sumOfNoEvenNumbers(2, 6)).toBe(8);
  });

  test("один элемент", () => {
    expect(sumOfNoEvenNumbers(0, 8)).toBe(16);
  });
});

describe("getRemainder", () => {
  describe("Корректные вычисления", () => {
    test("Обычные положительные числа", () => {
      expect(getRemainder(10, 3)).toBe(1);
      expect(getRemainder(20, 7)).toBe(6);
      expect(getRemainder(100, 30)).toBe(10);
    });

    test("Деление без остатка", () => {
      expect(getRemainder(10, 2)).toBe(0);
      expect(getRemainder(99, 33)).toBe(0);
      expect(getRemainder(64, 8)).toBe(0);
    });

    test("Делимое меньше делителя", () => {
      expect(getRemainder(3, 10)).toBe(3);
      expect(getRemainder(5, 100)).toBe(5);
      expect(getRemainder(0, 5)).toBe(0);
    });

    test("Отрицательные числа", () => {
      expect(getRemainder(-10, 3)).toBe(2);
      expect(getRemainder(10, -3)).toBe(1);
      expect(getRemainder(-10, -3)).toBe(2);
    });

    test("Ноль в качестве делимого", () => {
      expect(getRemainder(0, 5)).toBe(0);
      expect(getRemainder(0, 100)).toBe(0);
    });
  });

  describe("Обработка ошибок", () => {
    test("Деление на ноль", () => {
      expect(() => getRemainder(10, 0)).toThrow("Делить на ноль нельзя!");
    });

    test("Переданы не числа", () => {
      expect(() => getRemainder("10", 3)).toThrow(TypeError);
      expect(() => getRemainder(10, "3")).toThrow(TypeError);
      expect(() => getRemainder(null, 3)).toThrow(TypeError);
      expect(() => getRemainder(10, null)).toThrow(TypeError);
      expect(() => getRemainder(undefined, 3)).toThrow(TypeError);
      expect(() => getRemainder(10, undefined)).toThrow(TypeError);
      expect(() => getRemainder({}, 3)).toThrow(TypeError);
      expect(() => getRemainder(10, [])).toThrow(TypeError);
    });

    test("Бесконечные и нечисловые значения", () => {
      expect(() => getRemainder(NaN, 3)).toThrow(TypeError);
      expect(() => getRemainder(10, NaN)).toThrow(TypeError);
      expect(() => getRemainder(Infinity, 3)).toThrow(TypeError);
      expect(() => getRemainder(10, Infinity)).toThrow(TypeError);
    });
  });

  describe("Граничные случаи", () => {
    test("Очень большие числа", () => {
      expect(getRemainder(Number.MAX_SAFE_INTEGER, 2)).toBe(1);
    });

    test("Единица в делителе", () => {
      expect(getRemainder(100, 1)).toBe(0);
      expect(getRemainder(99, 1)).toBe(0);
    });

    test("Отрицательный ноль", () => {
      expect(getRemainder(-0, 5)).toBe(0);
    });
  });

  test("Математический остаток всегда неотрицательный", () => {
    const testCases = [
      [-10, 3, 2],
      [-7, 4, 1],
      [-5, 2, 1],
      [0, 5, 0],
    ];

    testCases.forEach(([dividend, divisor, expected]) => {
      expect(getRemainder(dividend, divisor)).toBe(expected);
    });
  });
});

describe("printLastCharsReverse", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("выводит все символы в обратном порядке", () => {
    printLastCharsReverse("abc");

    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "c");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "b");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "a");
  });

  test("строка из одного символа — выводит этот символ", () => {
    printLastCharsReverse("a");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith("a");
  });

  test("пустая строка — ничего не выводит", () => {
    printLastCharsReverse("");
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test("передано не строка — выбрасывает ошибку", () => {
    expect(() => printLastCharsReverse(123)).toThrow(TypeError);
    expect(() => printLastCharsReverse(null)).toThrow(TypeError);
    expect(() => printLastCharsReverse()).toThrow(TypeError);
  });
});
