const { constants } = require("buffer");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

//tesoura > papel && lagarto
//pedra > tesoura && lagarto
//papel > pedra && Spock
//spock > pedra && tesoura
//lagarto > papel && Spock

const compare = (sheldon, raj) => {
  let perdeu = "Raj trapaceou!";
  let ganhou = "Bazinga!";
  let empate = "De novo!";

  if (sheldon == raj) {
    return empate;
  }

  //tesoura
  if (sheldon == "tesoura") {
    if (raj == "papel" || raj == "lagarto") {
      return ganhou;
    }
    return perdeu;
  }

  //pedra
  if (sheldon == "pedra") {
    if (raj == "tesoura" || raj == "lagarto") {
      return ganhou;
    }
    return perdeu;
  }

  //papel
  if (sheldon == "papel") {
    if (raj == "pedra" || raj == "spock") {
      return ganhou;
    }
    return perdeu;
  }

  //spock
  if (sheldon == "Spock") {
    if (raj == "tesoura" || raj == "pedra") {
      return ganhou;
    }
    return perdeu;
  }

  //lagarto
  if (sheldon == "lagarto") {
    if (raj == "papel" || raj == "spock") {
      console.log("teste");
      return ganhou;
    }
    return perdeu;
  }
};

const loop = (lines) => {
  const [numberLines, ...rest] = lines;

  for (let i = 0; i < numberLines; i++) {
    const rodada = rest[i].split(" ");

    const result = compare(rodada[0], rodada[1]);

    console.log(`Caso #${i + 1} ${result}`);
  }
};

loop(lines);
