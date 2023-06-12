// Read a value of floating point with two decimal places. This represents a monetary value. 
// After this, calculate the smallest possible number of notes and coins on which the value can
// be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 
// 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes 
// and the message “MOEDAS:” followed by the list of coins.

// Input
// The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).

// Output
// Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('.');

let totalNotas = +lines[0];
let totalM = +lines[1];
let notas = [100, 50, 20, 10, 5, 2];
let moedas = [100, 50, 25, 10, 5, 1]; 

    console.log(`NOTAS:`)
    
    for (i = 0; i < notas.length; i++ ){
        resultado = Math.floor(totalNotas / notas[i])
        totalNotas = totalNotas % notas [i]

    console.log(`${resultado} nota(s) de R$ ${notas[i]}.00`)
    }
    
    totalM = (totalNotas * 100) + totalM

    console.log(`MOEDAS:`)

    for (c = 0; c < moedas.length; c++){
            resultadoMoedas = Math.floor(totalM / moedas[c])
            totalM = totalM % moedas [c]

            console.log(`${resultadoMoedas} moeda(s) de R$ ${(moedas[c]/100).toFixed(2)}`)
    
    }
