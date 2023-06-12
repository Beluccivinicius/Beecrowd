// Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. 
// If it's impossible to calculate the roots because a division by zero or a square 
// root of a negative number, presents the message “Impossivel calcular”.

// Input
// Read 3 floating-point numbers (double) A, B and C.

// Output
// Print the result with 5 digits after the decimal point or the message if it is impossible to calculate.

// x = (-b ± √(b² – 4ac)) / (2a)

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let number = lines.map((n) => +n);
let[a, b, c] = number
let result = (b ** 2) - (4 * a * c);

if(result > 0 && a != 0){
    let raiz1 = (-b + Math.sqrt(result)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(result)) / (2 * a);
    
    console.log(`R1 = ${raiz1.toFixed(5)}\nR2 = ${raiz2.toFixed(5)}`)
}else{
    console.log('Impossivel calcular')
}