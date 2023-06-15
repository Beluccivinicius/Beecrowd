// Read three integers and sort them in ascending order. After, print these values in ascending 
// order, a blank line and then the values in the sequence as they were readed.

// Input
// The input contains three integer numbers.

// Output
// Present the output as requested above

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let ordenacao = lines

ordenacao.sort((a,b) => a - b)
ordenacao.push(lines);
ordenacao.forEach(element => console.log(element))