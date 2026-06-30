// №1 Дана некоторая строка: 'a bc def ghij'. Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'
function setSmallWordsToUpperCase(words: string): string {
  return words
    .split(" ")
    .map(word => {
      if (word.length <= 3) {
        return word.toUpperCase();
      }
      return word;
    })
    .join(" ");
}

// №2 Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
function charIsLowerCase(char: string): boolean {
  return char === char.toLowerCase();
}

// №3 Дано некоторое число, например, такое: 123789. Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28
function deleteOddDigit(number: number): number {
  if (number < 0) {
    throw new Error("Число должно быть положительное");
  }
  let notOddDigits: string = "";
  for (const digit of number.toString()) {
    if (Number(digit) % 2 === 0) {
      notOddDigits = notOddDigits + digit;
    }
  }

  if (!notOddDigits.length) {
    throw new Error(`В исхродном числе "${number}" не оказалось четных чисел`);
  }

  return Number(notOddDigits);
}
