var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [variableA, variableB, variableC] = lines.map((n) => parseFloat(n))
var resultado = ((variableA * 2) + (variableB * 3) + (variableC * 5)) / 10

console.log(`MEDIA = ${resultado.toFixed(1)}`)