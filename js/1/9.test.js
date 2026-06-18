const { filterUrls, filterFilesOnExtensions, increaseByPercent } = require("./9.js");

describe("filterUrls", () => {
  test("Строки", () => {
    expect(filterUrls([])).toEqual([]);
    expect(filterUrls(["abc", "http://google.com"])).toEqual(["http://google.com"]);
    expect(filterUrls(["http://google.com"])).toEqual(["http://google.com"]);
    expect(filterUrls(["http://google.com"], "")).toEqual([]);
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

  test("В аргемент подстроки передана не строка — ошибка", () => {
    expect(() => filterUrls(["http://google.com", "dsfds"], 22)).toThrow(
      TypeError("Второй параметр должен быть строкой")
    );
  });

  test("не массив в аргументе — ошибка", () => {
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
    expect(filterFilesOnExtensions(["abc.html", "http://google.com"], "")).toEqual([]);
    expect(filterFilesOnExtensions(["index.html"])).toEqual(["index.html"]);
    expect(filterFilesOnExtensions(["page.html", "main.html"])).toEqual(["page.html", "main.html"]);
    expect(filterFilesOnExtensions(["index.html", "index.hbs", "profile.html"])).toEqual([
      "index.html",
      "profile.html",
    ]);
    expect(filterFilesOnExtensions(["index.html", "index.hbs", "profile.html"], ".hbs")).toEqual([
      "index.hbs",
    ]);
  });

  test("в массиве не строка — ошибка", () => {
    expect(() => filterFilesOnExtensions(["index.html", 1, "profile.html"])).toThrow(
      TypeError("Массив должен состоять только из строк")
    );
  });

  test("В аргемент подстроки передана не строка — ошибка", () => {
    expect(() => filterUrls(["index.html", "profile.html"], 22)).toThrow(
      TypeError("Второй параметр должен быть строкой")
    );
  });

  test("не массив в аргументе — ошибка", () => {
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

describe("increaseByPercent", () => {
  test("Числа", () => {
    expect(increaseByPercent([1, 2, 3])).toEqual([1.1, 2.2, 3.3]);
  });

  test("в массиве не число — ошибка", () => {
    expect(() => increaseByPercent([1, "index.html", 3])).toThrow(
      TypeError("Аргумент массива должен быть числом")
    );
  });
  test("в массиве не число — ошибка", () => {
    expect(() => increaseByPercent([1, 3], "22")).toThrow(
      TypeError("Второй параметр должен быть числом")
    );
  });
  test("Второй параметр вне допустимого процентного диапазона — ошибка", () => {
    expect(() => increaseByPercent([1, 3], 120)).toThrow(
      Error(
        "Ошибка диапазона! Число (значение коэффициента) не может быть меньше нуля или больше ста процентов"
      )
    );
    expect(() => increaseByPercent([1, 3], -1)).toThrow(
      Error(
        "Ошибка диапазона! Число (значение коэффициента) не может быть меньше нуля или больше ста процентов"
      )
    );
  });

  test("не массив в аргументе — ошибка", () => {
    expect(() => increaseByPercent("123")).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent(1, "456")).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent()).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent(null)).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent(1, null)).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent(NaN)).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent(NaN, 1)).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent(Infinity)).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent({})).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent(false)).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent(true)).toThrow(TypeError("Аргумент должен быть массивом"));
    expect(() => increaseByPercent("")).toThrow(TypeError("Аргумент должен быть массивом"));
  });
});
