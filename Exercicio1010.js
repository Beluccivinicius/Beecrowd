// In this problem, the task is to read a code of a product 1, the number of units of product 1,
// the price for one unit of product 1, the code of a product 2, the number of units of product
// 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

// Input
// The input file contains two lines of data. In each line there will be 3 values: two integers and
// a floating value with 2 digits after the decimal point.

// Output
// The output file must be a message like the following example where "Valor a pagar" means Value to Pay.
// Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

class Product {
  constructor(code, quantity, price, result) {
    this.code = code;
    this.quantity = quantity;
    this.price = price;
    this.result = [];
  }
  calculate(information) {
    const [code, quantity, price] = information.split(" ");
    let result = quantity * price;

    this.result.push(result);
  }
}

const menu = (lines) => {
  const product = new Product();

  lines.forEach((element) => product.calculate(element));

  let resultArray = product.result.reduce(
    (acumulattor, acurrentValue) => acumulattor + acurrentValue
  );

  console.log(`VALOR A PAGAR: R$ ${resultArray.toFixed(2)}`);
};

menu(lines);
