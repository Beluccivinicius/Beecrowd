var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var produto = +lines[0]
var quantidade = +lines[1]

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

const codigos = lanches.find((codigo) => codigo.codigoLista === produto)
let total = codigos.preco * quantidade

console.log(`Total: R$ ${total.toFixed(2)}`)