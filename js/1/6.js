// №1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.
function sumOfSquares(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Аргумент должен быть массивом");
  }

  return nums.reduce((acc, item, index, array) => {
    const num = Number(item);

    if (isNaN(num) || !isFinite(num)) {
      throw new TypeError(
        `Элемент '${item}', массива '${array}' c индексом - ${index}) не может быть преобразован в число`
      );
    }

    return acc + num * num;
  }, 0);
}

// №2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
function getSumOfSquareRoots(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Аргумент должен быть массивом чисел!");
  }

  return numbers.reduce((accum, num) => {
    if (typeof num !== "number" || !Number.isFinite(num)) {
      throw new TypeError(`Элемент '${num}' не является числом`);
    }

    if (num < 0) {
      throw new Error("Число должно быть положительным!");
    }

    return accum + Math.sqrt(num);
  }, 0);
}

// №3 Дан массив с числами. Найдите сумму положительных элементов этого массива.
function summAllNaturalNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Аргумент должен быть массивом");
  }

  return numbers.reduce((sum, number, array) => {
    if (typeof number !== "number" || !Number.isFinite(number)) {
      throw new TypeError(`Элемент '${number}' массива '${array}' не является числом`);
    }

    if (number > 0) {
      sum += number;
    }

    return sum;
  }, 0);
}

// №4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

module.exports = { sumOfSquares, getSumOfSquareRoots, summAllNaturalNumbers };
