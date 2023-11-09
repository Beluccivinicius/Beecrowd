var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const compareAh = (ahJhon, ahDoctor) => {
  if (ahDoctor.length <= ahJhon.length) {
    console.log("go");
    return;
  }
  console.log("no");
};

compareAh(lines[0], lines[1]);
