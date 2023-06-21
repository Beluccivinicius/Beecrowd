var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let produto = +lines[0]
let quantidade = +lines[1]
let informacaoFiltrada

const lanches = [
    {
        codigoLista: 1,
        nome: 'Cachorro Quente',
        preco: 4.00
    },
    {
        codigoLista: 2,
        nome: 'X-Salada',
        preco: 4.50
    },
    {
        codigoLista: 3,
        nome: 'X-Bancon',
        preco: 5.00
    },
    {
        codigoLista: 4,
        nome: 'Torrada simples',
        preco: 2.00
    },
    {
        codigoLista: 5,
        nome: 'Refrigerante',
        preco: 1.50
    }
]
for (let i in lanches) {
    if (lanches[i].codigoLista === produto) {
    informacaoFiltrada = lanches[i];
    break;
    }
}

console.log(informacaoFiltrada)
