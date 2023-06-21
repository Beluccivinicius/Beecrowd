var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let horas = lines[0]
    .split(' ')
    .map((n)=>+n)

let totalMinutos = (horas1, minutos1, horas2, minutos2) => {
    const totalMinutos1 = (horas1 * 60) + minutos1
    const totalMinutos2 = ((horas2 * 60) + minutos2)
    let totalJogo

if(totalMinutos1 < totalMinutos2){
    totalJogo =  totalMinutos2 - totalMinutos1
} else if(totalMinutos1 > totalMinutos2){
    totalJogo = Math.abs((1440 - totalMinutos1 )) + totalMinutos2
} else if (totalMinutos1 == totalMinutos2){
    totalJogo = 1440
}
    let min = totalJogo % 60
    let hora = Math.floor(totalJogo / 60)

    return [hora, min]
}

function main (){
    const [totalHora, totalMinuto] = totalMinutos(horas[0],horas[1],horas[2],horas[3])
    console.log(`O JOGO DUROU ${totalHora} HORA(S) E ${totalMinuto} MINUTO(S)`)
}

main()
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// let hora = 60
// let totalHora = 0
// let totalHoras = 1440
// let totalJogo = 0
// let restoMin = 0
// let totalMinutos1 = 0
// let totalMinutos2 = 0
// let horas = lines[0]
//     .split(' ')
//     .map((n)=>+n)

// totalMinutos1 = (horas[0] * hora) + horas[1]
// totalMinutos2 = ((horas[2] * hora) + horas[3])

// if(totalMinutos1 < totalMinutos2){
//     totalJogo =  totalMinutos2 - totalMinutos1
// } else if(totalMinutos1 > totalMinutos2){
//     totalJogo = Math.abs((totalMinutos1 - totalHoras)) + totalMinutos2
// } else if (totalMinutos1 == totalMinutos2){
//     totalJogo = totalHoras
// }

// if( totalJogo >= hora){
//     restoMin = totalJogo % hora
//     totalHora = Math.floor(totalJogo / hora)
// }else if (totalJogo < hora) {
//     restoMin = totalJogo
// }

// console.log(`O JOGO DUROU ${totalHora} HORA(S) E ${restoMin} MINUTO(S)`)