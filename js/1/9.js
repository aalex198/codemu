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

// №3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

module.exports = { filterUrls };
