// №1 Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
function filterUrls(urls, startParam = "http://") {
  if (!Array.isArray(urls)) {
    throw new TypeError("Аргумент должен быть массивом строк");
  }

  return urls.filter(url => {
    if (typeof url !== "string") {
      throw new TypeError("Массив должен состоять из строк!");
    }
    return url.startsWith(startParam);
  });
}

// №2 Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
function filterFilesOnExtensions(extensions, findExtension = ".html") {
  if (!Array.isArray(extensions)) {
    throw new TypeError("Аргумент должен быть массивом");
  }

  return extensions.filter(extension => {
    if (typeof extension !== "string") {
      throw new TypeError("Массив должен состоять только из строк");
    }

    return extension.endsWith(findExtension);
  });
}

// №3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

module.exports = { filterUrls, filterFilesOnExtensions };
