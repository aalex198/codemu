// №1 Дано число. Выведите в консоль первую цифру этого числа.
function getFirstDigit(num) {
  if (typeof num !== "number") {
    throw new TypeError("Аргумент не число");
  }
  if (!Number.isFinite(num)) {
    throw new Error("Аргумент должен быть конечным числом");
  }

  return Number(Math.abs(num).toString()[0]);
}

// №2 Дано число. Выведите в консоль последнюю цифру этого числа.
function getLastDigit(num) {
  if (typeof num !== "number" || !Number.isFinite(num)) {
    throw new TypeError("Аргумент не число (не тип number)");
  }

  const clear = num.toString().replace(/[-,.]/, "");
  return Number(clear.slice(-1));
}

// №3 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function getSumFirstAndLastDigit(num) {
  if (typeof num !== "number" || !Number.isFinite(num)) {
    throw new TypeError(
      `Неверный тип данных у "${num}". Должен быть "number", а не "${typeof num}"`
    );
  }

  const numToString = Math.abs(num).toString();
  if (numToString.length < 2) {
    return Number(numToString);
  } else {
    return Number(numToString[0]) + Number(numToString[numToString.length - 1]);
  }
}

// №4 Дано число. Выведите количество цифр в этом числе.
function getDigitsCount(num) {
  if (typeof num !== "number" || !Number.isFinite(num)) {
    throw new TypeError(`Аргумент "${num}" должен быть числом. Пришедший тип - "${typeof num}"`);
  }

  return Math.abs(num).toString().length;
}

// №5 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

module.exports = {
  getFirstDigit,
  getLastDigit,
  getSumFirstAndLastDigit,
  getDigitsCount,
};
