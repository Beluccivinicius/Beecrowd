// Read an integer N. Print all numbers between 1 and 10000,
// which divided by N will give the rest = 2.

// Input
// The input is an integer N (N < 10000)

// Output
// Print all numbers between 1 and 10000, which divided by n
// will give the rest = 2, one per line.

var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

const number = +lines;

const restaDois = (number) => {
  if (number > 10000) {
    return;
  }

  for (let i = 1; i <= 10000; i++) {
    if (i % number == 2) {
      console.log(i);
    }
    if (i == 1000) {
      console.log("\n");
    }
  }
};

restaDois(number);
