const {
  isNegative,
  stringLength,
  getLastLetterFromString,
  isEvenNumber,
  isEqualLetterOfTwoWords,
} = require("./1");

describe("Функция isNegative", () => {
  test("Отрицательное", () => {
    expect(isNegative(-1)).toBe(true);
  });

  test("Ноль", () => {
    expect(isNegative(0)).toBe(false);
  });

  test("Положительное", () => {
    expect(isNegative(1)).toBe(false);
  });

  test("Большое положительное", () => {
    expect(isNegative(99)).toBe(false);
  });

  test("Большое отрицательное", () => {
    expect(isNegative(22299)).toBe(false);
  });

  test("Передано не число — выбрасывает ошибку", () => {
    expect(() => isNegative("")).toThrow(TypeError);
    expect(() => isNegative("abc")).toThrow("Параметр должен быть числом");
  });
});

describe("Функция stringLength", () => {
  test("2 символа", () => {
    expect(stringLength("ss")).toBe(2);
  });

  test("5 символов", () => {
    expect(stringLength("hello")).toBe(5);
  });

  test("0 символов", () => {
    expect(stringLength("")).toBe(0);
  });

  test("Передано не строка — выбрасывает ошибку", () => {
    expect(() => stringLength()).toThrow(TypeError);
    expect(() => stringLength(22)).toThrow("Параметр должен быть строкой");
    expect(() => stringLength(null)).toThrow("Параметр должен быть строкой");
    expect(() => stringLength(NaN)).toThrow("Параметр должен быть строкой");
  });
});

describe("Функция getLastLetterFromString", () => {
  test("s", () => {
    expect(getLastLetterFromString("yes")).toBe("s");
  });
  test("a", () => {
    expect(getLastLetterFromString("a")).toBe("a");
  });
  test("c", () => {
    expect(getLastLetterFromString("155ac")).toBe("c");
  });
  test("Передано не строка — выбрасывает ошибку", () => {
    expect(() => getLastLetterFromString(undefined)).toThrow(TypeError);
    expect(() => getLastLetterFromString(22)).toThrow("Параметр должен быть строкой");
    expect(() => getLastLetterFromString(null)).toThrow("Параметр должен быть строкой");
    expect(() => getLastLetterFromString(NaN)).toThrow("Параметр должен быть строкой");
  });
});

describe("Функция isEvenNumber", () => {
  test(22, () => {
    expect(isEvenNumber(22)).toBe(true);
  });
  test("1", () => {
    expect(isEvenNumber(1)).toBe(false);
  });
  test("0", () => {
    expect(isEvenNumber(1)).toBe(false);
  });
  test("-1", () => {
    expect(isEvenNumber(-1)).toBe(false);
  });
  test("-10", () => {
    expect(isEvenNumber(-10)).toBe(true);
  });

  test("Передано не число — выбрасывает ошибку", () => {
    expect(() => isEvenNumber(undefined)).toThrow(TypeError);
    expect(() => isEvenNumber("22")).toThrow("Параметр должен быть числом");
    expect(() => isEvenNumber(null)).toThrow("Параметр должен быть числом");
    expect(() => isEvenNumber(NaN)).toThrow("Параметр должен быть числом");
    expect(() => isEvenNumber({})).toThrow("Параметр должен быть числом");
    expect(() => isEvenNumber([])).toThrow("Параметр должен быть числом");
  });
});

describe("Функция isEqualLetterOfTwoWords", () => {
  test("одинаковые первые буквы - one one", () => {
    expect(isEqualLetterOfTwoWords("one one")).toBe(true);
  });

  test("разные первые буквы - one two", () => {
    expect(isEqualLetterOfTwoWords("one two")).toBe(false);
  });

  test("регистр не важен - Apple apple", () => {
    expect(isEqualLetterOfTwoWords("Apple apple")).toBe(true);
  });

  test("с пробелами в начале/конце - ' one two '", () => {
    expect(isEqualLetterOfTwoWords(" one two ")).toBe(false);
  });

  test("табуляция как разделитель", () => {
    expect(isEqualLetterOfTwoWords("one\ttwo")).toBe(false);
  });

  test("Переданы некорректные данные — выбрасывает TypeError", () => {
    expect(() => isEqualLetterOfTwoWords(undefined)).toThrow(TypeError);
    expect(() => isEqualLetterOfTwoWords(22)).toThrow("Параметр должен быть строкой");
    expect(() => isEqualLetterOfTwoWords(null)).toThrow("Параметр должен быть строкой");
    expect(() => isEqualLetterOfTwoWords(NaN)).toThrow("Параметр должен быть строкой");
    expect(() => isEqualLetterOfTwoWords({})).toThrow("Параметр должен быть строкой");
    expect(() => isEqualLetterOfTwoWords([])).toThrow("Параметр должен быть строкой");
  });

  test("Некорректные строки — выбрасывает Error", () => {
    expect(() => isEqualLetterOfTwoWords("")).toThrow("Передана пустая строка");

    expect(() => isEqualLetterOfTwoWords("   ")).toThrow("Передана пустая строка");

    expect(() => isEqualLetterOfTwoWords("one")).toThrow("Должны быть переданы ровно 2 слова");
    expect(() => isEqualLetterOfTwoWords("one two three")).toThrow(
      "Должны быть переданы ровно 2 слова"
    );

    expect(() => isEqualLetterOfTwoWords(" one")).toThrow("Должны быть переданы ровно 2 слова");
  });
});
