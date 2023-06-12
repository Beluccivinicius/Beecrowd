// Read an integer value, which is the duration in seconds of a certain event in a 
// factory, and inform it expressed in hours:minutes:seconds.

// Input
// The input file contains an integer N.

// Output
// Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let horas = Math.floor(lines/3600);
let minutos = Math.floor((lines-(horas*3600))/60)
let segundos = (lines - horas * 3600 - minutos * 60)
console.log(`${horas}:${minutos}:${segundos}`)