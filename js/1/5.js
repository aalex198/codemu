// №1 Найдите сумму всех целых чисел от 1 до 100.

/**
 * Возвращает сумму целых чисел от start до end включительно
 * @param {number} start - начало диапазона
 * @param {number} end - конец диапазона
 * @returns {number} сумма чисел
 * @throws {TypeError} если аргументы будут не числа
 * @throws {Error} если start больше end
 */
function sumRange(start, end) {
  if (typeof start !== "number" || !Number.isFinite(start)) {
    throw new TypeError(`start должен быть числом, получено: ${start}`);
  }
  if (typeof end !== "number" || !Number.isFinite(end)) {
    throw new TypeError(`end должен быть числом, получено: ${end}`);
  }
  if (start > end) {
    throw new Error(`start (${start}) должен быть <= end (${end})`);
  }

  const count = end - start + 1;
  return (count * (start + end)) / 2;
}

// №2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
function sumOfEvenNumbers(start, end) {
  if (typeof start !== "number" || !Number.isFinite(start)) {
    throw new TypeError(`start должен быть числом, получено: ${start}`);
  }
  if (typeof end !== "number" || !Number.isFinite(end)) {
    throw new TypeError(`end должен быть числом, получено: ${end}`);
  }
  if (start > end) {
    throw new Error(`start (${start}) должен быть <= end (${end})`);
  }

  let result = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      result += i;
    }
  }

  return result;
}

// №3 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
function sumOfNoEvenNumbers(start, end) {
  if (typeof start !== "number" || !Number.isFinite(start)) {
    throw new TypeError(`start должен быть числом, получено: ${start}`);
  }
  if (typeof end !== "number" || !Number.isFinite(end)) {
    throw new TypeError(`end должен быть числом, получено: ${end}`);
  }
  if (start > end) {
    throw new Error(`start (${start}) должен быть <= end (${end})`);
  }

  let result = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result += i;
    }
  }

  return result;
}

// №4 Даны два целых числа. Найдите остаток от деления первого числа на второе.
function getRemainder(dividend, divisor) {
  if (typeof dividend !== "number" || !Number.isFinite(dividend)) {
    throw new TypeError(`dividend должен быть числом, получено: ${dividend}`);
  }
  if (typeof divisor !== "number" || !Number.isFinite(divisor)) {
    throw new TypeError(`divisor должен быть числом, получено: ${divisor}`);
  }

  if (divisor === 0) {
    throw new Error("Делить на ноль нельзя!");
  }

  const remainder = dividend % divisor;
  return remainder < 0 ? remainder + Math.abs(divisor) : Math.abs(remainder);
}

// №5 Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

module.exports = { sumRange, sumOfEvenNumbers, sumOfNoEvenNumbers, getRemainder };
