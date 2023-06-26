var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let salario = +lines[0]
let impo
const imposto = [
    {salarioaMax: 2000.00, imposto: 1},
    {salarioaMax: 1000.00, imposto: 0.08},
    {salarioaMax: 1500.00, imposto: 0.18},
    {salarioaMax: Infinity, imposto: 0.28},
]

const total = imposto.reduce( (soma, itemAtual) => {
    if(soma < salarioaMax)
    soma = (itemAtual.salarioaMax - soma) * itemAtual.imposto
    
    return soma
}, salario)

console.log(total)