// Read 4 integer values A, B, C and D. Then if B is greater than C and D is greater than A and 
// if the sum of C and D is greater than the sum of A and B and if C and D were positives values 
// and if A is even, write the message “Valores aceitos” (Accepted values). Otherwise, write the 
// message “Valores nao aceitos” (Values not accepted).

// Input
// Four integer numbers A, B, C and D.

// Output
// Show the corresponding message after the validation of the values​​.

// B > C, D > A, C + D > A + B

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let number = lines.map((n)=>+n);
let [A, B, C, D] = number
    if (B > C && D > A && A % 2 === 0 && (C + D) > (A + B)){
        console.log('Valores aceitos')
    } else {
        console.log('Valores nao aceitos')
    }

// if (B > C){

//     }

// console.log(`${}`)