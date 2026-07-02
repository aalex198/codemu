// №1 Дано некоторое число: 123456. Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56
function sumPairsNum(num: number): number {
  if (typeof num !== "number" || !Number.isFinite(num)) {
    throw new TypeError("Аргумент не является валидным числом");
  }

  if (num < 0) {
    throw new Error(`Ожидается положительное число, получено число - "${num}"`);
  }

  if (num < 100) {
    return num;
  }

  const numStr = num.toString();
  let sum: number = 0;

  for (let i = 0; i < numStr.length; i += 2) {
    sum += Number(numStr[i] + numStr[i + 1]);

    if (i + 2 === numStr.length - 1) {
      sum += Number(numStr[numStr.length - 1]);
      break;
    }
  }

  return sum;
}

// №2 Дан массив с числами: [1, 2, 3, 4, 5]. Выведите в консоль элементы этого массива в обратном порядке.
function logStack(arr: number[]): void {
  // O(n) по памяти из за промежуточного массива [..arr] (не из за reverse - так как он мутирует исходный, не создавая копию)
  //   [...arr].reverse().forEach(num => {
  //     console.log(num);
  //   });

  // O(1) по памяти
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
