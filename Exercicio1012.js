// Make a program that reads three floating point values: A, B and C. Then, calculate and show:
// a) the area of the rectangled triangle that has base A and height C. A = 1 2 ( b × h )
// b) the area of the radius's circle C. (pi = 3.14159) A=Pi*R**2
// c) the area of the trapezium which has A and B by base, and C by height. Area = (1/2)* h /2
// d) the area of ​​the square that has side B. A=a**2
// e) the area of the rectangle that has sides A and B. A=A*B

// Input
// The input file contains three double values with one digit after the decimal point.

// Output
// The output file must contain 5 lines of data. Each line corresponds to one of the areas described above,
//  always with a corresponding message (in Portuguese) and one space between the two points and the value.
//  The value calculated must be presented with 3 digits after the decimal point.

var input = require("fs").readFileSync("stdin", "utf8");

class Calculate {
  constructor(a, b, c) {
    (this.a = a), (this.b = b), (this.c = c);
  }
  triangle = function () {
    let area = (this.a * this.c) / 2;

    console.log(`TRIANGULO: ${area.toFixed(3)}`);
  };

  circle = function () {
    let area = Math.pow(this.c, 2) * 3.14159;

    console.log(`CIRCULO: ${area.toFixed(3)}`);
  };

  trapezium = function () {
    let area = ((this.a + this.b) * this.c) / 2;

    console.log(`TRAPEZIO: ${area.toFixed(3)}`);
  };

  square = function () {
    let area = this.b * this.b;

    console.log(`QUADRADO: ${area.toFixed(3)}`);
  };

  retangle = function () {
    let area = this.a * this.b;

    console.log(`RETANGULO: ${area.toFixed(3)}`);
  };
}

const menu = () => {
  var lines = input.split(" ");

  const [a, b, c] = lines.map((n) => +n);

  const calculate = new Calculate(a, b, c);

  calculate.triangle();
  calculate.circle();
  calculate.trapezium();
  calculate.square();
  calculate.retangle();
};

menu();
