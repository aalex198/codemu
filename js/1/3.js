// №1 Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
function getLastChar(string) {
  if (typeof string !== "string") {
    throw new TypeError(
      `Аргумент "${string}" не является строкой. Его тип данных - "${typeof string}"`
    );
  }

  if (string.length > 1) {
    return string[string.length - 2];
  } else return string;
}

// №2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
function isDivisible(firstNum, secondNum) {
  if (typeof firstNum !== "number" || !Number.isFinite(firstNum)) {
    throw new TypeError(`Первый аргумент имеет тип данных не 'number', а '${typeof firstNum}'`);
  }
  if (typeof secondNum !== "number" || !Number.isFinite(secondNum)) {
    throw new TypeError(`Второе число имеет тип данных не 'number', а '${typeof secondNum}'`);
  }

  if (secondNum === 0) {
    throw new Error("На ноль делить нельзя!");
  }

  return firstNum % secondNum === 0;
}

module.exports = { getLastChar, isDivisible };
