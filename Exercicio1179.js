var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

(function (arr) {
  let arrOdd = [];
  let arrEven = [];

  if (arr.length > 15) arr.splice(16);

  for (let i = 0; i < arr.length; i++) {
    let number = +arr[i];

    number % 2 === 0 ? arrEven.push(number) : arrOdd.push(number);

    arrOdd.length === 5 && print(arrOdd);
    arrEven.length === 5 && print(arrEven);
  }

  arrOdd.length > 0 && print(arrOdd);
  arrEven.length > 0 && print(arrEven);

  function print(arr) {
    const rest = arr.length;
    for (let i = 0; i < rest; i++) {
      let evenOdd = arr[0] % 2 === 0 ? "par" : "impar";
      console.log(`${evenOdd}[${i}] = ${arr[0]}`);
      arr.shift();
    }
  }
})(lines);
