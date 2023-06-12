var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const A = lines [0];
const B = lines [1];
X = Number(A) + Number(B);
console.log(`X = ${X}`);