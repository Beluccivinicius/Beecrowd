// Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1)
// and p2 (x2, y2) and calculate the distance between them, showing four decimal places after the comma,
// according to the formula:

// Distance = √(x2-x1)**2+(y2-y1)**2

// Input
// The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one
//  also contains two double values with one digit after the decimal point: x2 y2.

// Output
// Calculate and print the distance value using the provided formula, with 4 digits after the decimal point.

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

class Calculate {
  constructor(x1, x2, y1, y2) {
    (this.x1 = x1), (this.x2 = x2), (this.y1 = y1), (this.y2 = y2);
  }

  calculate() {
    const secondPow = Math.pow(this.x2 - this.x1, 2);
    const firstPow = Math.pow(this.y2 - this.y1, 2);

    const square = Math.sqrt(firstPow + secondPow);

    console.log(square.toFixed(4));
  }
}
const menu = () => {
  const [x, y] = lines;

  const [x1, y1] = x.split(" ");
  const [x2, y2] = y.split(" ");

  const calculate = new Calculate(x1, x2, y1, y2);

  calculate.calculate();
};

menu();
