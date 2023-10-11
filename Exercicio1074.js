var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

const numeros = lines.map((n) => +n);

const [nValues, ...rest] = numeros;

const verification = (nValues, rest) => {
  if (nValues > 10000) {
    return;
  }

  rest.forEach((element) => {
    let parImpar = "ODD";

    if (element % 2 === 0) {
      parImpar = "EVEN";
    }

    if (element < 0) {
      console.log(`${parImpar} NEGATIVE`);
    } else if (element > 0) {
      console.log(`${parImpar} POSITIVE`);
    } else {
      console.log("NULL");
    }
  });
};

verification(nValues, rest);
