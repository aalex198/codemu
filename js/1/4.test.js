const {
  logsOneHundred,
  fromNegativeOneHundredToZero,
  logsDigitsFromOneHangredToOne,
  getAllEvenNumbers,
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
