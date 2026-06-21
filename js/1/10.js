// №1 Заполните массив случайными числами из промежутка от 1 до 100.
function setRandomRange(from, to) {
  if (typeof from !== "number" || !Number.isFinite(from)) {
    throw new Error("Первый аргумент должен быть числом");
  }
  if (typeof to !== "number" || !Number.isFinite(to)) {
    throw new Error("Второй аргумент должен быть числом");
  }

  if (from >= to) {
    throw new Error(`Некорректный диапазон аргументов. "${from}" должен быть меньше "${to}"`);
  }

  let randomDigits = [];

  for (let i = from; i <= to; i++) {
    if (Math.random > 0.5) {
      randomDigits.push(i);
    }
  }

  return randomDigits;
}

// №2 Дано некоторое число: 12345. Выведите в консоль все его символы с конца.
function logDigitsReversed(number) {
  if (typeof number !== "number" || !Number.isFinite(number)) {
    throw new Error("Аргумент должен быть конечным числом!");
  }

  const strNum = Math.abs(number).toString();

  for (let i = strNum.length - 1; i >= 0; i--) {
    console.log(strNum[i]);
  }
}

// №3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]. По очереди выведите в консоль подмассивы из двух элементов нашего массива: [1, 2] [3, 4] [5, 6]
function logSubarrays(array) {
  if (!Array.isArray(array)) {
    throw new Error("Аргумент должен быть массивом!");
  }

  for (let i = 0; i < array.length; i += 2) {
    const result = [];
    result.push(array[i]);
    if (array[i + 1]) {
      result.push(array[i + 1]);
    }

    console.log(result);
    // console.log(array.slice(i, i + 2));
  }
}

// №4 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]
function mergeArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError("Оба аргумента должны быть массивами");
  }
}

module.exports = { setRandomRange, logDigitsReversed, logSubarrays, mergeArrays };
