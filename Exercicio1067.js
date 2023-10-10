var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const [length] = lines;
const newArray = [];

const create = (length) => {
  for (let i = length; i > 0; i--) {
    if (i % 2 != 0) {
      newArray.push(i);
    }
  }
};

create(length);

newArray.sort((a, b) => a - b);
newArray.forEach((element) => console.log(element));
