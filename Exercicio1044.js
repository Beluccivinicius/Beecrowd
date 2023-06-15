// Read two integer values (A and B). After, the program should print the message "Sao Multiplos" 
// (are multiples) or "Nao sao Multiplos" (aren’t multiples), corresponding to the read values.

// Input
// The input has two integer numbers.

// Output
// Print the relative message to the input as stated above.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let [a,b] = lines.map((n)=>+n);
let multiplos = (a, b) => b % a

if (Math.floor(multiplos(a, b))  == 0){
    console.log(`Sao Multiplos`);
}else if (Math.floor(multiplos(b, a)) == 0){
    console.log(`Sao Multiplos`);
}else{
    console.log(`Nao sao Multiplos`)
}


