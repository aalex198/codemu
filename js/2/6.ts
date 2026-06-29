// №1 Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
function getIndexesAllDigits(str: string): number[] {
  const digitIndexes = [];

  for (let i = 0; i < str.length; i++) {
    // if (str[i] >= "0" && str[i] <= "9") {
    if (/\d/.test(str[i])) {
      digitIndexes.push(i);
    }
  }

  return digitIndexes;
}

// №2 Дан массив с некоторыми числами, например, вот такой: [123, 456, 789]. Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]
function reverseNumbers(nums: number[]): number[] {
  return nums.map(number => {
    let isNegative = false;
    if (number < 0) {
      isNegative = true;
    }
    const reverseNumber = Number([...Math.abs(number).toString()].reverse().join(""));

    // Number(String(n).split("").reduce((acc, d) => d + acc, ""))

    return isNegative ? -reverseNumber : reverseNumber;
  });
}

// №3 Дана некоторая строка с числом: '1234567'. Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'
function formatPrice(price: string): string {
  let dividerCount = 0;
  let formattingPrivce = "";
  for (let i = price.length - 1; i >= 0; i--) {
    ++dividerCount;
    if (dividerCount % 3 === 0 && i !== 0) {
      formattingPrivce = " " + price[i] + formattingPrivce;
    } else {
      formattingPrivce = price[i] + formattingPrivce;
    }
  }
  return formattingPrivce;

  // return Number(price).toLocaleString("ru-RU");
  //   return new Intl.NumberFormat("ru-RU").format(Number(price));
}

// №4 Дана некоторая строка: 'AbCdE'. Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'
function replaceUpperCase(str: string): string {
  let replaceStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      replaceStr += str[i].toLowerCase();
    } else {
      replaceStr += str[i].toUpperCase();
    }
  }

  //   return [...str].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() ).join("")
  return replaceStr;
}

// №5 Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6, 7]. Слейте пары элементов вместе: [12, 34, 56]
function setPairs(nums: number[]): number[] {
  let pairs: number[] = [];
  for (let i = 0; i < nums.length; i += 2) {
    if (i + 1 < nums.length) {
      pairs.push(Number.parseInt(String(nums[i]) + String(nums[i + 1])));
    } else {
    }
    pairs.push(nums[i]);
  }

  return pairs;
}

// №6 Дана некоторая строка со словами: 'aaa bbb ccc eee fff'. Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'
function setEverySecondWordFirstCharToUpperCase(str: string): string {
  return str
    .split(" ")
    .map((word, index) => {
      if (index % 2 === 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join(" ");
}
