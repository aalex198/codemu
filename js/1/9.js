// №1 Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
function filterUrls(urls, startParam = "http://") {
  if (!Array.isArray(urls)) {
    throw new TypeError("Аргумент должен быть массивом строк");
  }

  if (typeof startParam !== "string") {
    throw new TypeError("Второй параметр должен быть строкой");
  }

  return urls.filter(url => {
    if (typeof url !== "string") {
      throw new TypeError("Массив должен состоять из строк!");
    }

    if (startParam === "") return false;
    return url.startsWith(startParam);
  });
}

// №2 Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
function filterFilesOnExtensions(extensions, findExtension = ".html") {
  if (!Array.isArray(extensions)) {
    throw new TypeError("Аргумент должен быть массивом");
  }

  if (typeof findExtension !== "string") {
    throw new TypeError("Второй параметр должен быть строкой");
  }

  return extensions.filter(extension => {
    if (typeof extension !== "string") {
      throw new TypeError("Массив должен состоять только из строк");
    }

    if (findExtension === "") return false;

    return extension.endsWith(findExtension);
  });
}

// №3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
/**
 *
 * @param {number[]} nums
 * @param {number} percent с диапазоном от 0 до 100
 */
function increaseByPercent(nums, percent = 10) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Аргумент должен быть массивом");
  }

  if (typeof percent !== "number") {
    throw new TypeError("Второй параметр должен быть числом");
  }

  if (percent < 0 || percent > 100) {
    throw new Error(
      "Ошибка диапазона! Число (значение коэффициента) не может быть меньше нуля или больше ста процентов"
    );
  }

  return nums.map(num => {
    if (typeof num !== "number" || !Number.isFinite(num)) {
      throw new TypeError("Аргумент массива должен быть числом");
    }

    return num + (num / 100) * percent;
  });
}

module.exports = { filterUrls, filterFilesOnExtensions, increaseByPercent };
