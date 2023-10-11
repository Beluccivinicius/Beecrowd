var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

lines.length = 10000;
let i = 0;
let j = 0;

lines.forEach((element) => {
  if (element >= 10 && element <= 20) {
    i++;
  } else {
    j++;
  }
});

console.log(`${i} in\n${j} out`);
