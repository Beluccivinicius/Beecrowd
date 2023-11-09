var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const loop = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let floatNumber = parseFloat(arr[i]);
    if (arr[i] < 10) {
      console.log(`A[${i}] = ${floatNumber}`);
    }
  }
};

loop(lines);
