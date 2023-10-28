var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const calculating = (numberA, numberB) => {
  for (let i = numberA + 1; i < numberB; i++) {
    if (i % 5 == 2 || i % 5 == 3) {
      console.log(i);
    }
  }
};

const orderingNumber = (lines) => {
  const numbers = lines.map((n) => +n);

  if (numbers[0] > numbers[1]) {
    const higherNumber = numbers.pop();
    numbers.unshift(higherNumber);
  }

  calculating(numbers[0], numbers[1]);
};

orderingNumber(lines);
