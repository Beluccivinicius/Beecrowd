// Make a program that reads 3 integer values and present the greatest one followed by the message 
// "eh o maior". Use the following formula:
// MaiorAB= (a+b+abs(a-b))/2
// Input
// The input file contains 3 integer values.

// Output
// Print the greatest of these three values followed by a space and the message “eh o maior”.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let max = Math.max(...lines);
console.log (`${max}`);

// let max = [a,b,c].reduce(function(a,b,c){
//     return Math.max(a,b,c)
// }, -Infinity)





// console.log(`${Math.max [a,b,c]}`)

// const verdade = (a,b) => ((a+b)+Math.abs(a-b))/2
// const falso = (b,c) => ((b+c)+Math.abs(b-c))/2
// console.log(verdade(a,b))

// var arr = [1, 2, 3];
// var max = arr.reduce(function(a, b) {
//   return Math.max(a, b);
// }, -Infinity);
