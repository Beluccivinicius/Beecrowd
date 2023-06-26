var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numeros = lines.map((n) => +n)
let i = 0
let x = 0

let soma = numeros.reduce((acumulador, elementoAtual) => {
    if (elementoAtual > 0) {
    i++;
    return acumulador + elementoAtual;
    }
    return acumulador;
}, 0);

console.log(`${i} valores positivos\n${(soma/i).toFixed(1)}`)