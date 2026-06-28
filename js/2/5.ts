// №1 Дана некоторая строка, например, вот такая: '023m0df0dfg0'. Получите массив позиций всех нулей в этой в строке.
function getIndexZeros(str: string): number[] {
  //   Императивный стиль
  //   let result: number[] = [];
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === "0") {
  //       result.push(i);
  //     }
  //   }

  //   return result;

  // функциональный стиль
  return [...str].reduce((result, char, index) => {
    if (char === "0") {
      return [...result, index];
    }
    return result;
  }, [] as number[]);
}

// №2 Дана некоторая строка: 'abcdefg'. Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'
function deleteEveryThirdChar(str: string) {
  let filterStr: string = "";
  for (let i = 1; i <= str.length; i++) {
    if (i % 3 !== 0) {
      filterStr += str[i];
    }
  }

  return filterStr;
}

// №3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]. Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
function dividerEvenSumOnNotEven(nums: number[]): number {
  const result = nums.reduce(
    (acc, num, index) => {
      const isEvenPos = index % 2 === 1;
      return {
        evens: acc.evens + (isEvenPos ? num : 0),
        notEvens: acc.notEvens + (isEvenPos ? 0 : num),
      };
    },
    { evens: 0, notEvens: 0 }
  );

  if (result.notEvens === 0) {
    throw new Error("Сумма на нечетных позициях равна 0");
  }

  return result.evens / result.notEvens;
}
