const { filterUrls, filterFilesOnExtensions } = require("./9.js");

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

describe("filterFilesOnExtensions", () => {
  test("Строки", () => {
    expect(filterFilesOnExtensions([])).toEqual([]);
    expect(filterFilesOnExtensions(["index.pug"])).toEqual([]);
    expect(filterFilesOnExtensions(["abc.html", "http://google.com"])).toEqual(["abc.html"]);
    expect(filterFilesOnExtensions(["index.html"])).toEqual(["index.html"]);
    expect(filterFilesOnExtensions(["page.html", "main.html"])).toEqual(["page.html", "main.html"]);
    expect(filterFilesOnExtensions(["index.html", "index.hbs", "profile.html"])).toEqual([
      "index.html",
      "profile.html",
    ]);
  });

  test("в массиве не строка — ошибка", () => {
    expect(() => filterFilesOnExtensions(["index.html", 1, "profile.html"])).toThrow(
      TypeError("Массив должен состоять только из строк")
    );
  });

  test("не число в аргументе — ошибка", () => {
    expect(() => filterFilesOnExtensions("123")).toThrow(
      TypeError("Аргумент должен быть массивом")
    );
    expect(() => filterFilesOnExtensions(1, "456")).toThrow(
      TypeError("Аргумент должен быть массивом")
    );
    expect(() => filterFilesOnExtensions()).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => filterFilesOnExtensions(null)).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => filterFilesOnExtensions(1, null)).toThrow(
      TypeError("Аргумент должен быть массивом")
    );
    expect(() => filterFilesOnExtensions(NaN)).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => filterFilesOnExtensions(NaN, 1)).toThrow(
      TypeError("Аргумент должен быть массивом")
    );
    expect(() => filterFilesOnExtensions(Infinity)).toThrow(
      TypeError("Аргумент должен быть массивом")
    );
    expect(() => filterFilesOnExtensions({})).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => filterFilesOnExtensions(false)).toThrow(
      TypeError("Аргумент должен быть массивом")
    );
    expect(() => filterFilesOnExtensions(true)).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => filterFilesOnExtensions("")).toThrow(TypeError("Аргумент должен быть массивом"));
  });
});
