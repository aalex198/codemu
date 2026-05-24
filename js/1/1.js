// №1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
function isNegative(num) {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    throw new TypeError('Параметр должен быть числом');
  }

  return num < 0;
}

// №2 Дана строка. Выведите в консоль длину этой строки.
function stringLength(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Параметр должен быть строкой');
  }

  return str.length;
};

// №3 Дана строка. Выведите в консоль последний символ строки.

// №4 Дано число. Проверьте, четное оно или нет.

// №5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.

module.exports = { isNegative, stringLength };