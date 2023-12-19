var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

(function arrayMin(array) {
  const [num, ...rest] = array;

  const splitado = [];
  for (let i = 0; i < rest.length; i++) {
    const peaces = rest[i].split(" ");
    const numberArray = peaces.map((n) => Number(n));
    splitado.push(numberArray);
  }

  const minimun = splitado.flat();
  let min = Math.min(...minimun);

  console.log(`Menor valor: ${min}`);

  for (let i = 0; i < minimun.length; i++) {
    if (minimun[i] === min) {
      console.log(`Posicao: ${i}`);
      return;
    }
  }
})(lines);
