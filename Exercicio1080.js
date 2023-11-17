var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const [linesTotal, ...totalAnimal] = lines;

const countingAnimals = (totalAnimal) => {
  const conta = totalAnimal.reduce((animals, animal) => {
    const split = animal.split(" ");
    const [quantity, letter] = split;

    if (animals[letter]) {
      animals[letter].push(quantity);
    } else {
      animals[letter] = [];
      animals[letter].push(quantity);
    }
    return animals;
  }, {});

  const rats = conta.R.reduce((acc, curr) => (acc += parseInt(curr)), 0);

  const habbit = conta.C.reduce((acc, curr) => (acc += parseInt(curr)), 0);

  const frog = conta.S.reduce((acc, curr) => (acc += parseInt(curr)), 0);

  const total = rats + habbit + frog;

  const percentual = (totalEspecie, total) => {
    const percentual = (totalEspecie / total) * 100;

    return percentual.toFixed(2);
  };

  const percentualRats = percentual(rats, total);

  const percentualHabbits = percentual(habbit, total);

  const percentualFrog = percentual(frog, total);

  console.log(
    `Total: ${total} cobaias\nTotal de coelhos: ${habbit}\nTotal de ratos: ${rats}\nTotal de sapos: ${frog}\nPercentual de coelhos: ${percentualHabbits} %\nPercentual de ratos: ${percentualRats} %\nPercentual de sapos: ${percentualFrog} %`
  );
  return;
};

countingAnimals(totalAnimal);
