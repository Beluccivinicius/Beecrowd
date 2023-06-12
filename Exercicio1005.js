var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const [notaA,notaB] = lines.map((n)=> parseFloat(n));
var media= (notaA*3.5 + notaB*7.5)/11
console.log(`MEDIA = ${media.toFixed(5)}`);