// №1 Выведите в консоль все целые числа от 1 до 100.
function logsOneHundred() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// №2 Выведите в консоль все целые числа от -100 до 0.
function fromNegativeOneHundredToZero() {
  let counter = -100;
  while (counter <= 0) {
    console.log(counter);
    counter = counter + 1;
  }
}

// №3 Выведите в консоль все целые числа от 100 до 1.
function logsDigitsFromOneHangredToOne() {
  let i = 100;
  do {
    console.log(i);
    i--;
  } while (i >= 1);
}
// №4 Выведите в консоль все четные числа из промежутка от 1 до 100.
function getAllEvenNumbers(fromDigit, toDigit) {
  if (typeof fromDigit !== "number" || !Number.isFinite(fromDigit)) {
    throw new TypeError(
      `Аргумент '${fromDigit}' не является числом по типу данных. Его тип определен как - '${typeof fromDigit}'`
    );
  }

  if (typeof toDigit !== "number" || !Number.isFinite(toDigit)) {
    throw new TypeError(
      `Аргумент '${toDigit}' не является числом по типу данных. Его тип определен как - '${typeof toDigit}'`
    );
  }

  if (fromDigit >= toDigit) {
    throw new Error(`Первый аргумент '${fromDigit}' должен быть меньше второго '${toDigit}'`);
  }

  let result = [];

  for (let i = fromDigit; i <= toDigit; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
}

// №5 Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
function filterMultiplesOfThree(min, max) {
  if (typeof min !== "number" || !Number.isFinite(min)) {
    throw new TypeError(
      `аргумет '${min}' не является числом по типу данных. Его тип - '${typeof min}'`
    );
  }
  if (typeof max !== "number" || !Number.isFinite(max)) {
    throw new TypeError(
      `аргумет '${max}' не является числом по типу данных. Его тип - '${typeof max}'`
    );
  }

  if (min >= max) {
    throw new Error(`Некорректный диапазон! число '${min}' должен быть меньше числа '${max}'`);
  }

  let result = [];

  for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
      result.push(i);
    }
  }

  return result;
}
// рекурсией

module.exports = {
  logsOneHundred,
  fromNegativeOneHundredToZero,
  logsDigitsFromOneHangredToOne,
  getAllEvenNumbers,
  filterMultiplesOfThree,
};
