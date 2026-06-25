// №1 Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
function countNegatives(numbers: number[]): number {
  return numbers.reduce((acc, item) => {
    if (item < 0) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

// №2 Дан массив с числами. Оставьте в нем только положительные числа.
function filterPositiveDigits(numbers: number[]): number[] {
  return numbers.filter(number => number > 0);
}

// №3 Дана строка. Удалите предпоследний символ из этой строки.
function removeSecondToLast(str: string): string {
  if (str.length === 1) {
    return str;
  }

  const arr = str.split("");
  arr.splice(arr.length - 2, 1);

  return arr.join("");
  // return str.slice(0, str.length - 2) + str.slice(str.length - 1);
  // return str.split("").filter((_, i) => i !== str.length - 2).join("");
}

// №4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов. Если длина массива нечетная - первая часть должна быть больше второй.
function dividerPathsNumbers(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  if (numbers.length === 1) {
    return numbers[0];
  }

  let firstPathSum = 0;
  let secondPathSum = 0;
  const middle = Math.ceil(numbers.length / 2);

  for (const [index, digit] of numbers.entries()) {
    if (index < middle) {
      firstPathSum = firstPathSum + digit;
    } else {
      secondPathSum = secondPathSum + digit;
    }
  }

  return firstPathSum / secondPathSum;
}
