// №1 Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
function getIndexForstDigit(str: string): number {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] >= "0" && str[i] <= "9") return i;
  //       return i;
  //     }
  //   }

  //   return str.match(/\d+/)?.index ?? -1;
  return str.search(/\d+/);
}

// №2 Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
function splitKeysAndValuesOnTuple<T extends Record<string, any>>(obj: T) {
  return [Object.keys(obj) as (keyof T)[], Object.values(obj) as T[keyof T][]];
}

// №3 Дано число. Выведите в консоль количество четных цифр в этом числе.
function getEvensCounter(num: number): number {
  if (typeof num !== "number" || !Number.isFinite(num)) {
    throw new TypeError("Аргумент должен быть конечным числом");
  }
  const stringNumber = num.toString();
  let count = 0;
  for (let i = 0; i < stringNumber.length; i++) {
    if (Number(stringNumber[i]) % 2 === 0) {
      count++;
    }
  }

  return count;
}

// №4 Дана некоторая строка: 'abcde'. Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'
function evenCharToUpperCase(str: string): string {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    // Нужно проверять ИНДЕКС (i), а не символ (str[i])
    if (i % 2 === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// №5 Дана некоторая строка со словами: 'aaa bbb ccc'. Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'
function setUppercaseFirstWord(str: string): string {
  return str
    .split(" ")
    .filter(Boolean)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
