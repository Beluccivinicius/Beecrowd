//input => first line: lenght array,
//second line: number gamer can level up
//third line: array with score

//primeiro vou ter que desestruturar os elementos inputs

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let number = lines.map((n) => +n);

function position(number) {
  const [gamer, numberScores, ...rest] = number;

  let position = 1;
  for (let j = 1; j <= numberScores; j++) {
    let maior = rest.reduce((acc, curr) => Math.max(acc, curr), 0);

    j = position;
    for (let i = 0; i < rest.length; i++) {
      const index = rest.indexOf(maior, i);

      if (maior == 0) {
        return rest;
      }

      if (index != -1) {
        rest[index] = `${j}`;
        position++;
      }
    }
  }
  const quantity = rest.filter((x) => {
    const isNumber = typeof x;
    if (isNumber == "string") {
      return x;
    }
  });

  const array = rest.map((n) => {
    const isNumber = typeof n;
    if (isNumber == "number") {
      return (n = "desclassificado");
    }
    return n;
  });

  return {
    totalJogadores: rest.length,
    jogadoresProximaFase: quantity.length,
    array: array,
  };
}

console.log(position(number));
