var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

const numeros = lines.map((n) => parseInt(n));

const ehMaior = (n1, n2) => {
  if (n2 < n1) {
    numeros.splice(0, 1, n2);
    numeros.splice(1, 1, n1);
  }
};
ehMaior(...numeros);
[n1, n2] = numeros;

const numerosImpar = () => {
  let sum = 0;
  for (let i = n1 + 1; i < n2; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(numerosImpar());
