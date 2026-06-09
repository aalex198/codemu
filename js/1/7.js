// №1 Дана строка: 'abcde'. Получите массив букв этой строки.
function stringToArray(string) {
  if (typeof string !== "string") {
    throw new TypeError("Аргумент должен быть строкой");
  }
  if (string.length === 0) {
    return [""];
  }

  let result = [];

  for (let i = 0; i < string.length; i++) {
    result.push(string[i]);
  }

  return result;

  // return [...string]
  // return string.split('')
  // return Array.from(string)
  // for (let char of string) {result.push(char)}
}

// №2 Дано некоторое число: 12345. Получите массив цифр этого числа.

// №3 Дано некоторое число: 12345. Переверните его: 54321

// №4 Дано некоторое число: 12345. Найдите сумму цифр этого числа.

module.exports = { stringToArray };
