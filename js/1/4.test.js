const {
  logsOneHundred,
  fromNegativeOneHundredToZero,
  logsDigitsFromOneHangredToOne,
  getAllEvenNumbers,
  filterMultiplesOfThree,
} = require("./4.js");

describe("logsOneHundred", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });
  test("выводит числа от 1 до 100", () => {
    logsOneHundred();

    expect(consoleSpy).toHaveBeenCalledTimes(100);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
    expect(consoleSpy).toHaveBeenNthCalledWith(100, 100);
    expect(consoleSpy).toHaveBeenNthCalledWith(50, 50);
  });

  test("выводит корректную последовательность", () => {
    logsOneHundred();

    const allCalls = consoleSpy.mock.calls;

    for (let i = 0; i < 100; i++) {
      expect(allCalls[i][0]).toBe(i + 1);
    }
  });
});

describe("fromNegativeOneHundredToZero", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("выводит числа от -100 до 0", () => {
    fromNegativeOneHundredToZero();

    expect(consoleSpy).toHaveBeenCalledTimes(101);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, -100);
    expect(consoleSpy).toHaveBeenNthCalledWith(101, 0);
    expect(consoleSpy).toHaveBeenNthCalledWith(51, -50);
  });

  test("выводит корректную последовательность", () => {
    fromNegativeOneHundredToZero();

    const allCalls = consoleSpy.mock.calls;

    for (let i = 0; i < 101; i++) {
      const expectedValue = -100 + i;
      expect(allCalls[i][0]).toBe(expectedValue);
    }
  });
});

describe("logsDigitsFromOneHangredToOne", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("выводит числа от 100 до 1", () => {
    logsDigitsFromOneHangredToOne();

    expect(consoleSpy).toHaveBeenCalledTimes(100);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 100);
    expect(consoleSpy).toHaveBeenNthCalledWith(100, 1);
    expect(consoleSpy).toHaveBeenNthCalledWith(50, 51);
  });

  test("выводит корректную последовательность", () => {
    logsDigitsFromOneHangredToOne();

    const allCalls = consoleSpy.mock.calls;

    for (let i = 0; i < 100; i++) {
      const expectedValue = 100 - i;
      expect(allCalls[i][0]).toBe(expectedValue);
    }
  });
});

describe("getAllEvenNumbers", () => {
  test("Возвращает массив всех четных чисел из промежутка", () => {
    expect(getAllEvenNumbers(1, 10)).toEqual([2, 4, 6, 8, 10]);
    expect(getAllEvenNumbers(2, 10)).toEqual([2, 4, 6, 8, 10]);
    expect(getAllEvenNumbers(3, 9)).toEqual([4, 6, 8]);
    expect(getAllEvenNumbers(5, 6)).toEqual([6]);
    expect(getAllEvenNumbers(4, 5)).toEqual([4]);
  });

  test("Отрицательные числа тоже работают", () => {
    expect(() => getAllEvenNumbers(-10, -1)).not.toThrow();
    expect(getAllEvenNumbers(-10, -1)).toEqual([-10, -8, -6, -4, -2]);
  });

  test("Второй аргумент меньше первого — выбрасывает ошибку", () => {
    expect(() => getAllEvenNumbers(10, 1)).toThrow(Error);
    expect(() => getAllEvenNumbers(10, 1)).toThrow(
      "Первый аргумент '10' должен быть меньше второго '1'"
    );
  });

  test("Аргументы равны — выбрасывает ошибку", () => {
    expect(() => getAllEvenNumbers(5, 5)).toThrow(Error);
    expect(() => getAllEvenNumbers(5, 5)).toThrow(
      "Первый аргумент '5' должен быть меньше второго '5'"
    );
  });

  test("Передано не число — выбрасывает ошибку", () => {
    expect(() => getAllEvenNumbers("0")).toThrow(TypeError);
    expect(() => getAllEvenNumbers("")).toThrow(TypeError);
    expect(() => getAllEvenNumbers("abc")).toThrow(TypeError);

    expect(() => getAllEvenNumbers(1)).toThrow(TypeError);
    expect(() => getAllEvenNumbers(undefined, 1)).toThrow(TypeError);
    expect(() => getAllEvenNumbers(1, NaN)).toThrow(TypeError);
    expect(() => getAllEvenNumbers(1, "123")).toThrow(TypeError);

    expect(() => getAllEvenNumbers(null)).toThrow(TypeError);
    expect(() => getAllEvenNumbers()).toThrow(TypeError);
    expect(() => getAllEvenNumbers({})).toThrow(TypeError);
    expect(() => getAllEvenNumbers([])).toThrow(TypeError);
    expect(() => getAllEvenNumbers(NaN)).toThrow(TypeError);
    expect(() => getAllEvenNumbers(Infinity)).toThrow(TypeError);
  });
});

describe("filterMultiplesOfThree", () => {
  test("Возвращает массив всех чисел кратных трем из промежутка", () => {
    expect(filterMultiplesOfThree(1, 10)).toEqual([3, 6, 9]);
    expect(filterMultiplesOfThree(2, 10)).toEqual([3, 6, 9]);
    expect(filterMultiplesOfThree(3, 9)).toEqual([3, 6, 9]);
    expect(filterMultiplesOfThree(5, 6)).toEqual([6]);
    expect(filterMultiplesOfThree(4, 5)).toEqual([]);
  });

  test("Отрицательные числа тоже работают", () => {
    expect(() => filterMultiplesOfThree(-10, -1)).not.toThrow();
    expect(filterMultiplesOfThree(-10, -1)).toEqual([-9, -6, -3]);
  });

  test("Второй аргумент меньше первого — выбрасывает ошибку", () => {
    expect(() => filterMultiplesOfThree(10, 1)).toThrow(Error);
    expect(() => filterMultiplesOfThree(10, 1)).toThrow(
      "Некорректный диапазон! число '10' должен быть меньше числа '1'"
    );
  });

  test("Аргументы равны — выбрасывает ошибку", () => {
    expect(() => filterMultiplesOfThree(5, 5)).toThrow(Error);
    expect(() => filterMultiplesOfThree(5, 5)).toThrow(
      "Некорректный диапазон! число '5' должен быть меньше числа '5'"
    );
  });

  test("Передано не число — выбрасывает ошибку", () => {
    expect(() => filterMultiplesOfThree("0")).toThrow(
      `аргумет '0' не является числом по типу данных. Его тип - 'string'`
    );
    expect(() => filterMultiplesOfThree("")).toThrow(TypeError);
    expect(() => filterMultiplesOfThree("abc")).toThrow(TypeError);

    expect(() => filterMultiplesOfThree(1)).toThrow(TypeError);
    expect(() => filterMultiplesOfThree(undefined, 1)).toThrow(TypeError);
    expect(() => filterMultiplesOfThree(1, NaN)).toThrow(TypeError);
    expect(() => filterMultiplesOfThree(1, "123")).toThrow(TypeError);

    expect(() => filterMultiplesOfThree(null)).toThrow(TypeError);
    expect(() => filterMultiplesOfThree()).toThrow(TypeError);
    expect(() => filterMultiplesOfThree({})).toThrow(TypeError);
    expect(() => filterMultiplesOfThree([])).toThrow(TypeError);
    expect(() => filterMultiplesOfThree(NaN)).toThrow(TypeError);
    expect(() => filterMultiplesOfThree(Infinity)).toThrow(TypeError);
  });
});
