var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const levelUp = (lines) => {
  const [numberGames, cutoff, ...rest] = lines;
  const number = rest.map((n) => +n);
  if (numberGames < cutoff) {
    return;
  }
  let select = [];

  for (let i = 0; i < cutoff; i++) {
    let maior = number.reduce((acc, curr) => Math.max(acc, curr), 0);

    const index = number.indexOf(maior);

    if (maior == 0) {
      return select;
    }

    if (index !== -1) {
      const maiorNumero = number.splice(index, 1);

      select.push(maiorNumero);
    }
  }

  return select.length;
};

console.log(levelUp(lines));
