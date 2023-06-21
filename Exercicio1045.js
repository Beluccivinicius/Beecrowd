// Read 3 double numbers (A, B and C) representing the sides of a triangle and arrange
// them in decreasing order, so that the side A is the biggest of the three sides. Next, 
// determine the type of triangle that they can make, based on the following cases always 
// writing an appropriate message:

// if A ≥ B + C, write the message: NAO FORMA TRIANGULO
// if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
// if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
// if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
// if the three sides are the same size, write the message: TRIANGULO EQUILATERO
// if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
// Input
// The input contains three double numbers, A (0 < A) , B (0 < B) and C (0 < C).

// Output
// Print all the classifications of the triangle presented in the input.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

lines.sort ((a,b) => b - a);
let [a, b, c] = lines.map((n)=>+n)
console.log(a,b,c);

switch(true) {
    case a >= b + c:
        console.log('NAO FORMA TRIANGULO');
    break;
    case a**2 == b**2 + c**2: 
        console.log('TRIANGULO RETANGULO');
    break;
    case a**2 > b**2 + c**2:
        console.log('TRIANGULO OBTUSANGULO');
    break;
    case a**2 < b**2 + c**2:
        console.log('TRIANGULO ACUTANGULO');
    break;
}

if (a == b && a == c) {
    console.log('TRIANGULO EQUILATERO');
} else if (a == b || a == c || b == c) {
    console.log('TRIANGULO ISOSCELES');
}