var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const ddd2 = [
    {numero: 11, cidade: 'São Paulo'},
    {numero: 61, cidade: 'Brasilia'},
    {numero: 71, cidade: 'Salvador'},
    {numero: 21, cidade: 'Rio de janeiro'},
    {numero: 32, cidade: 'Juiz de Fora'},
    {numero: 19, cidade: 'Campinas'},
    {numero: 27, cidade: 'Vitoria'},
    {numero: 31, cidade: 'Belo Horizonte'},
]

let numero = +lines[0]

let cidade = 'nao cadastrado'  
for (let i in ddd2) {
if(ddd2[i].numero === numero){
    cidade = ddd2[i].cidade
    }
}
console.log(cidade)

// const filtro = ddd2.filter(element => element == ddd2[0])
// console.log(filtro[0].numero)