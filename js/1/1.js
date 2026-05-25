// №1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
function isNegative(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new TypeError("Параметр должен быть числом");
  }

  return num < 0;
}

// №2 Дана строка. Выведите в консоль длину этой строки.
function stringLength(str) {
  if (typeof str !== "string") {
    throw new TypeError("Параметр должен быть строкой");
  }

  return str.length;
}

// №3 Дана строка. Выведите в консоль последний символ строки.
function getLastLetterFromString(str) {
  if (typeof str !== "string") {
    throw new TypeError("Параметр должен быть строкой");
  }

  if (str.trim().length < 1) {
    throw new Error("Передана пустая строка");
  }

  return str[str.length - 1];
}

// №4 Дано число. Проверьте, четное оно или нет.
function isEvenNumber(num) {
  if (typeof num !== "number" || !Number.isFinite(num)) {
    throw new TypeError("Параметр должен быть числом!");
  }

  return num % 2 === 0;
}

// №5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.
function isEqualLetterOfTwoWords(twoWords) {
  if (typeof twoWords !== "string") {
    throw new TypeError("Параметр должен быть строкой");
  }
  const trimmed = twoWords.trim();

  if (trimmed.length === 0) {
    throw new Error("Передана пустая строка");
  }

  const words = trimmed.split(/\s+/);

  if (words.length !== 2) {
    throw new Error("Должны быть переданы ровно 2 слова");
  }

  return words[0][0].toLowerCase() === words[1][0].toLowerCase();
}

module.exports = {
  isNegative,
  stringLength,
  getLastLetterFromString,
  isEvenNumber,
  isEqualLetterOfTwoWords,
};
