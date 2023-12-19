var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

// 1. Alcohol 2. Gasoline 3. Diesel 4. includes

(function (lines) {
  const gas = { 1: "alcohol", 2: "gasoline", 3: "diesel" };

  const arrGas = Object.keys(gas);

  let alcohol;
  let gasoline;
  let diesel;

  for (let i = 0; i < lines.length; i++) {
    let number = lines[i];
    for (let j = 0; j < arrGas.length; j++) {
      number === arrGas;
    }
  }
})(lines);
