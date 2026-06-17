const { filterUrls } = require("./9.js");

describe("filterUrls", () => {
  test("Строки", () => {
    expect(filterUrls([])).toEqual([]);
    expect(filterUrls(["abc", "http://google.com"])).toEqual(["http://google.com"]);
    expect(filterUrls(["http://google.com"])).toEqual(["http://google.com"]);
    expect(filterUrls(["http://google.com", "http://ya.ru"])).toEqual([
      "http://google.com",
      "http://ya.ru",
    ]);
    expect(filterUrls(["http://google.com", "cdb", "http://ya.ru"])).toEqual([
      "http://google.com",
      "http://ya.ru",
    ]);
  });

  test("в массиве не строка — ошибка", () => {
    expect(() => filterUrls(["http://google.com", 1, "dsfds"])).toThrow(
      TypeError("Массив должен состоять из строк!")
    );
  });

  test("не число в аргументе — ошибка", () => {
    expect(() => filterUrls("123")).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls(1, "456")).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls()).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls(null)).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls(1, null)).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls(NaN)).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls(NaN, 1)).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls(Infinity)).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls({})).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls(false)).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls(true)).toThrow(TypeError("Аргумент должен быть массивом строк"));
    expect(() => filterUrls("")).toThrow(TypeError("Аргумент должен быть массивом строк"));
  });
});
