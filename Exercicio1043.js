// Read three point floating values (A, B and C) and verify if is possible to make a triangle with them.
//  If it is possible, calculate the perimeter of the triangle and print the message:

const { umask } = require('process');


// Perimetro = XX.X

// | b - c | < a < b + c
// | a - c | < b < a + c
// | a - b | < c < a + b
// If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the message:


// Area = XX.X

// Input
// The input file has tree floating point numbers.

// Output
// Print the result with one digit after the decimal point.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

lines.sort((a,b) => a - b)
let[a, b, c] = lines.map((n)=>+n)

let soma = a + b
let comparacao = soma > c
console.log(comparacao)

if (comparacao == true) {
    let perimetro = a + b + c;
    console.log(`Perímetro = ${perimetro.toFixed(1)}`);
} else {
    let area = (b + c) * a / 2;
    console.log(`Área = ${area.toFixed(1)}`);
}

// switch (comparacao){
//     case (comparacao === true):{
//         let perimetro = a + b + c 
//         console.log(`Perimetro = ${perimetro.toFixed(1)}`)
//     break;
//     }default:
//         let area = 1/2 * (a + b) * c
//         console.log(`Area = ${area.toFixed(1)}`)
// }

// if ((b-c) < a < b + c) {
//     console.log('é um triangulo')
// } else if ((a-c)< b < a +c) {
//     console.log('não é um triangulo')
// } else if ((a-b)< c < a +b) {
//     console.log ('é um triangulo' )
// } else {
//     console.log(`se fudeu`)
// }


