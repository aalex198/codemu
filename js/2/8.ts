// №1 Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
/**
 * Проверяет, что в строке не более двух заглавных букв латинского алфавита.
 *
 * Функция возвращает `true`, если количество заглавных букв (A-Z) в строке
 * не превышает двух. При обнаружении третьей заглавной буквы сразу возвращает `false`.
 *
 * @param str - проверяемая строка
 * @returns `true`, если заглавных букв 0, 1 или 2; `false`, если 3 и больше
 *
 * @example
 * hasAtMostTwoUpperChars("Abc")    // true  — одна заглавная
 * hasAtMostTwoUpperChars("ABC")    // false — три заглавные
 * hasAtMostTwoUpperChars("abc")    // true  — ноль заглавных
 * hasAtMostTwoUpperChars("Hello World") // true — две заглавные (H, W)
 * hasAtMostTwoUpperChars("ABCD")   // false — четыре заглавные
 */
function hasAtMostTwoUpperChars(str: string): boolean {
  let count = 0;

  for (const char of str) {
    if (char >= "A" && char <= "Z") {
      count++;
      if (count > 2) {
        return false;
      }
    }
  }

  return true;
}

// №2 Дана некоторая строка: '1 22 333 4444 22 5555 1'. Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'
function removeLongSubstrings(str: string): string {
  return str
    .split(" ")
    .filter(subString => subString.length <= 3)
    .join(" ");
}

// №3 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]
function concatArrays<T, U>(first: T[], second: U[]): (T | U)[] {
  return [...first.slice(0, 2), ...second, ...first.slice(2)];
  //   return [...first].splice(2, 0, ...second);
}
