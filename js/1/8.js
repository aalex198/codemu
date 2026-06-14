// №1 Заполните массив целыми числами от 1 до 10.
function getFilledNumsArray(start, end) {
  if (typeof start !== "number" || !Number.isFinite(start)) {
    throw new TypeError(`Аргумент "${start}" должен быть числом`);
  }
  if (typeof end !== "number" || !Number.isFinite(end)) {
    throw new TypeError(`Аргумент "${end}" должен быть числом`);
  }

  if (start >= end) {
    throw new Error(`Ошибка диапазона: число "${start}" должно быть меньше числа "${end}"`);
  }
  let result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

// №2 Заполните массив четными числами из промежутка от 1 до 100.
function getRangeOfNaturalDigit(start, end) {
  if (typeof start !== "number" || !Number.isFinite(start)) {
    throw new TypeError(`Аргумент "${start}" не является числом`);
  }
  if (typeof end !== "number" || !Number.isFinite(end)) {
    throw new TypeError(`Аргумент "${end}" не является числом`);
  }

  if (start >= end) {
    throw new Error("Некорректный диапазон!");
  }

  let result = [];
  for (let i = Math.ceil(start); i <= Math.floor(end); i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
}

// №3 Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]. Округлите эти дроби до одного знака в дробной части.

module.exports = { getFilledNumsArray, getRangeOfNaturalDigit };
