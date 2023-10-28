var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const sumNumbers = (numberA, numberB) => {
  if (numberA == 0 || numberB == 0) {
    return 0;
  }

  const maiorNumero = numberB;

  if (numberA > numberB) {
    numberB = numberA;
    numberA = maiorNumero;
  }

  var arrayReturn = [];
  for (let i = numberA; i <= numberB; i++) {
    arrayReturn.push(i);
  }

  const reduce = arrayReturn.reduce((acc, crr) => acc + crr, 0);

  arrayReturn.push(reduce);

  return arrayReturn;
};

const viewSum = (lines) => {
  let arrayElements = [];
  for (let i = 0; i < lines.length; i++) {
    const [elementA, elementB] = lines[i].split(" ");

    const numberA = parseInt(elementA);
    const numberB = parseInt(elementB);

    const results = sumNumbers(numberA, numberB);

    if (results == 0) return;

    const sum = results.pop();
    const sumToString = sum.toString();
    const toString = results.join(" ");

    console.log(toString + ` Sum=${sumToString}`);
  }
};

viewSum(lines);
