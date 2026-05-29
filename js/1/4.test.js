const { logsOneHundred } = require("./4.js");

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
