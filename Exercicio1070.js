var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const numero = parseInt(lines);

const comparacao = (lines) => {
  let newArray = [];
  for (let i = lines; newArray.length < 6; i++) {
    if (i % 2 != 0) {
      newArray.push(i);
    }
  }
  return ([g, h, i, j, k, l] = newArray);
};

comparacao(numero);
console.log(`${g}\n${h}\n${i}\n${j}\n${k}\n${l}`);
