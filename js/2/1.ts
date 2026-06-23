// №1 Дана некоторая строка. Найдите позицию первого нуля в строке.
function getIndexFirstZeroDigit(numStr: string, findChar: string): number {
  if (typeof numStr !== "string") {
    throw new TypeError(
      `Первый аргумент "${numStr}" является не строкой! Его тип ${typeof numStr}`
    );
  }
  if (typeof findChar !== "string") {
    throw new TypeError(
      `Второй аргумент ${findChar} является не строкой! Его тип ${typeof findChar}`
    );
  }

  const index = numStr.indexOf("0");
  if (index < 0) {
    throw new Error(`Ноль не найден в строке`);
  }

  return index;
}

// №2 Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
function logNumbersWhereFirstTwoDigitsSumToFive({
  from = 1,
  to = 1000,
  sumFirstTwoDigits = 5,
}: {
  from?: number;
  to?: number;
  sumFirstTwoDigits?: number;
}): void {
  for (let i = from; i <= to; i++) {
    const digitStr = String(i);
    if (i > 9 && Number(digitStr[0]) + Number(digitStr[1]) === sumFirstTwoDigits) {
      console.log(i);
    }
  }
}

// №3 Дан массив. Удалите из него элементы с заданным значением.
// Иммутабельный
function removeElements<T>(arr: T[], removeElement: T): T[] {
  return arr.filter(item => item !== removeElement);
}

// Мутабельный
type TRemoveElementsWithMutation<T> = (arr: T[], removeElem: T) => void;
const removeElementsWithMutation: TRemoveElementsWithMutation = (arr, removeElement) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === removeElement) {
      arr.splice(i, 1);
      i--;
    }
  }
};

// №4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]. Найдите сумму первой половины элементов этого массива.
