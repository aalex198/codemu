// №1 Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
/**
 * Проверяет, совпадает ли последняя буква первого слова с первой буквой второго слова.
 *
 * @param firstWord - Первое слово для проверки.
 * @param secondWord - Второе слово для проверки.
 * @returns `true`, если последняя буква `firstWord` совпадает с первой буквой `secondWord`, иначе `false`.
 *
 * @throws {TypeError} Если хотя бы один из аргументов не является строкой.
 *
 * @example
 * isIdenticalLastAndFirstCharWords("hello", "world"); // false (o !== w)
 * isIdenticalLastAndFirstCharWords("мир", "рай");     // true  (р === р)
 *
 * @remarks
 * Если один из аргументов — пустая строка (`""`), функция выводит
 * предупреждение в консоль через `console.warn` и возвращает `false`.
 * Пустая строка — это не ошибка типа, а пограничный случай, при котором
 * сравнение не имеет смысла. Предупреждение помогает заметить такую
 * ситуацию при отладке, не прерывая выполнение программы исключением.
 */
function isIdenticalLastAndFirstCharWords(firstWord: string, secondWord: string): boolean {
  if (typeof firstWord !== "string") {
    throw new TypeError("Первый аргумент должен быть строкой!");
  }
  if (typeof secondWord !== "string") {
    throw new TypeError("Второй аргумент должен быть строкой!");
  }
  if (!firstWord || !secondWord) {
    console.warn(
      `Отсутствуют необходимые аргументы. Получены аргументы "${firstWord}" и "${secondWord}"`
    );
    return false;
  }

  //   return firstWord.at(-1) === secondWord[0];
  //   return firstWord.endsWith(secondWord[0]);
  //   return firstWord.slice(-1) === secondWord.slice(0, 1);

  return firstWord[firstWord.length - 1] === secondWord[0];
}

// №2 Дана некоторая строка. Найдите позицию третьего нуля в строке.
/**
 * Находит индекс третьего нуля в строке.
 *
 * @param str - Строка для поиска.
 * @returns Индекс третьего нуля (0-based), или `-1`, если в строке меньше трёх нулей.
 *
 * @throws {TypeError} Если аргумент не является строкой.
 *
 * @example
 * getIndexOfThirdZeroOfString("000");        // 2  — третий ноль на индексе 2
 * getIndexOfThirdZeroOfString("1001001");    // 5  — нули на индексах 1, 4, 5
 * getIndexOfThirdZeroOfString("00100");      // -1 — всего два нуля
 * getIndexOfThirdZeroOfString("abc");        // -1 — нулей нет
 * getIndexOfThirdZeroOfString("");           // -1 — пустая строка
 */
function getIndexOfThirdZeroOfString(str: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      count++;

      if (count === 3) {
        return i;
      }
      // if (str[i] === "0" && ++count === 3) return i;
    }
  }

  return -1;
}

// №3 Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.
function sumNumbersFromString(str: string): number {
  if (typeof str !== "string") {
    throw new TypeError("Аргумент должен быть строкой");
  }

  if (!str) return 0;
  return str.split(",").reduce((sum, digit) => {
    const num = Number(digit);
    if (isNaN(num)) {
      throw new Error(`"${digit}" не является числом`);
    }

    return sum + num;
  }, 0);
}

// №4 Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: { year: '2025', month: '12', day: '31', }

type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

// Создаем диапазон чисел от 1 до 31
type DayNumber = Exclude<Enumerate<32>, 0>; // 1 | 2 | ... | 31

// Автоматически превращаем числа в строки с ведущим нулем (01, 02... 31)
type DayString = DayNumber extends any
  ? `${DayNumber extends Exclude<Enumerate<10>, 0> ? "0" : ""}${DayNumber}`
  : never;

interface IDate {
  year: string;
  month: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";
  day: DayString;
}
function parceDate(dateISO: string): IDate {
  let [year, month, day] = dateISO.split("-");

  if (!year || !month || !day) {
    throw new Error(`Некоректный формат даты - "${dateISO}". Ожидается ISO 8601: "yyyy-mm-dd"`);
  }

  if (isNaN(Number(year))) {
    throw new Error(`Некорректный год в дате - "${year}". Значение не является валидным числом`);
  }

  if (Number.isNaN(month) || Number(month) < 0 || Number(month) > 12 || month.length > 2) {
    throw new Error(`Некорректный месяц в дате - "${month}" `);
  }

  if (Number.isNaN(day) || day.length > 2 || Number(day) > 31) {
    throw new Error(`Некорректный день в дате - "${day}" `);
  }

  if (month.length < 2) {
    month = month.padStart(2, "0");
  }

  if (day.length < 2) {
    day = day.padStart(2, "0");
  }

  function assertValidMonth(month: string): asserts month is IDate["month"] {
    if (!/^(0[1-9]|1[0-2])$/.test(month)) {
      throw new Error(`Некорректный месяц: "${month}"`);
    }
  }
  function assertValidDay(day: string): asserts day is IDate["day"] {
    if (!/^(0[1-9]|[12]\d|3[01])$/.test(day)) {
      throw new Error(`Некорректный месяц: "${day}"`);
    }
  }
  assertValidMonth(month);
  assertValidDay(day);

  return { year, month, day };
}
