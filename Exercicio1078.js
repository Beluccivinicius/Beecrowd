var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

const number = lines.map((n) => +n);

const multiple = (number) => {
  for (let i = 1; i <= 10; i++) {
    let multiplicacao = number * i;
    console.log(`${i} x ${number} = ${multiplicacao}`);
  }
};

multiple(number[0]);
