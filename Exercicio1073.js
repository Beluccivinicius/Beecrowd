// Read an integer N. Print the square of each one of the even values from 1 to N including N if it is the case.

// Input
// The input contains an integer N (5 < N < 2000).

// Output
// Print the square of each one of the even values from 1 to N, as the given example.

// Be carefull! Some language automaticly print 1e+006 instead 1000000. Please configure your program to print the correct format setting the output precision.

var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

const [numero] = lines.map((n) => +n);

const aoQuadrado = (numero) => {
  if (numero < 5 || numero > 2000) {
    return;
  }

  let even = numero;

  if (numero % 2 !== 0) {
    even = numero - 1;
  }

  let index = 2;

  for (let i = 2; i <= even; i = i + 2) {
    let result = Math.pow(i, 2);
    console.log(`${i}^2 = ${result}`);
  }
};

aoQuadrado(numero);
