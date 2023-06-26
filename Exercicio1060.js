var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numeros = lines.map((n) => +n);
let positivos = 0;

for(var i = 0; i < lines.length; i++){
    if (numeros[i] > 0){
    positivos++;
    }
}
console.log(positivos)
