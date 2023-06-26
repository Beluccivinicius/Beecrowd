var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let dias = lines[2].split('')[4]
let dias2 = lines[0].split('')[4]
let diasTotal = (dias - dias2) * 86400

let horasTotais = lines[1].split(' : ').map((n) => +n)

let [horas, minutos, segundos] = horasTotais

let horasTotais1 = lines[3].split(' : ').map((n) => +n)

let [horas2, minutos2, segundos2] = horasTotais1

let transformar = (horas, minutos, segundos) => {
    let segundosDias = (horas * 3600) + (minutos * 60) + segundos;
    return segundosDias
}

let retransformar = (contas1) => {
    let dias = Math.floor(contas1 / 86400)
    let horas = Math.floor((contas1 % 86400) / 3600)
    let minutos = Math.floor(((contas1 % 86400) % 3600) / 60)
    let segundos = Math.floor(((contas1 % 86400) % 3600) % 60)
    return {dias, horas, minutos, segundos}
}

let contas1 = transformar(horas, minutos, segundos) 
let contas2 = transformar(horas2, minutos2, segundos2)
let apagar = (contas1 - contas2) + diasTotal

console.log(`${retransformar(apagar).dias} dia(s)\n${retransformar(apagar).horas} hora(s)\n${retransformar(apagar).minutos} minuto(s)\n${retransformar(apagar).segundos} segundo(s)`)