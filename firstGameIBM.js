//input => first line: lenght array,
//second line: number gamer can level up
//third line: array with score

//primeiro vou ter que desestruturar os elementos inputs

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let number = lines.map((n) => +n);

function position(number) {
  const [gamer, gamerLevelUp, ...rest] = number;

  if (gamer != rest.length || gamerLevelUp > gamer) {
    return { msg: "inconsistência de dados" };
  }

  if (gamer > 100000 || rest.length > 100000) {
    return { msg: "Excedeu o numero de participantes" };
  }
  console.log(rest);
  let position = 1;
  for (let j = 1; j <= gamerLevelUp; j++) {
    let maior = rest.reduce((acc, curr) => Math.max(acc, curr), 0);
    let menor = rest.reduce((acc, curr) => Math.min(acc, curr), 0);

    if (menor < 0 || maior > 100) {
      return { msg: "Scores incorretos" };
    }

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
