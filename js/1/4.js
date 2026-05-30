// №1 Выведите в консоль все целые числа от 1 до 100.
function logsOneHundred() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// №2 Выведите в консоль все целые числа от -100 до 0.
function fromNegativeOneHundredToZero() {
  let counter = -100;
  while (counter <= 0) {
    console.log(counter);
    counter = counter + 1;
  }
}

// №3 Выведите в консоль все целые числа от 100 до 1.
function logsDigitsFromOneHangredToOne() {
  let i = 100;
  do {
    console.log(i);
    i--;
  } while (i >= 1);
}
// №4 Выведите в консоль все четные числа из промежутка от 1 до 100.
// рекурсией

// №5 Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

module.exports = { logsOneHundred, fromNegativeOneHundredToZero, logsDigitsFromOneHangredToOne };
