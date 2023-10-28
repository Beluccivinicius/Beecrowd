var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

const NumberOfLines = +lines.shift();

const media = lines.map(function (element) {
  const eachNote = element.split(" ");
  const [firstNumber, secondNumber, thirdyNumber] = eachNote;
  let media =
    (firstNumber * 2 + secondNumber * 3 + thirdyNumber * 5) / (2 + 3 + 5);

  let interNumber = media.toFixed(1);

  return interNumber;
});
media.forEach((n) => console.log(parseFloat(+n)));
