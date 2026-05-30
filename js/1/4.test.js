const {
  logsOneHundred,
  fromNegativeOneHundredToZero,
  logsDigitsFromOneHangredToOne,
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
