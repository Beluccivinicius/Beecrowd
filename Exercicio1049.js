const vertebrado = [
{
    nome: 'aguia',
    alimentacao: 'carnivoro',
    tipo: 'ave'
},
{
    nome: 'Pomba',
    alimentacao: 'onivoro',
    tipo: 'ave',
},
{
    nome : 'homem',
    alimentacao: 'onivoro',
    tipo: 'mamifero',
},
{
    nome: 'vaca',
    alimentacao: 'herbivoro',
    tipo: 'mamifero'
},
]

const invertebrado = [
{
    nome: 'pulga',
    alimentacao: 'hematofago',
    tipo: 'inseto',
},
{
    nome: 'lagarta',
    alimentacao: 'herbivoro',
    tipo: 'inseto',
},
{
    nome: 'sanguessuga',
    alimentacao: 'hematofago',
    tipo: 'anelidio'
},
{
    nome: 'minhoca',
    alimentacao: 'onivoro',
    tipo: 'anelidio'
},
]

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [caracteristica1, caracteristica2, caracteristica3] = lines

if(caracteristica1 == 'vertebrado'){
const match = vertebrado.filter(element => element.tipo == caracteristica2)
const match2 = match.filter(element => element.alimentacao == caracteristica3)
}else if(caracteristica1 == 'invertebrado'){
const match = invertebrado.filter(element => element.tipo == caracteristica2)
const match2 = match.filter(element => element.alimentacao == caracteristica3)
}

console.log(match2.nome)
