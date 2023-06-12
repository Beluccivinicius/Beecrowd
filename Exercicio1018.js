// n this problem you have to read an integer value and calculate the smallest possible number of banknotes 
// in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. Print the read
//  value and the list of banknotes.

// Input
// The input file contains an integer value N (0 < N < 1000000).

// Output
// Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given 
// example. Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('');

let total = +lines
let notas = [100, 50, 20, 10, 5, 2, 1];
console.log (total)

    for (let i = 0; i < notas.length; i++){   
        let resultado = Math.floor(total / notas[i]);
        total = total % notas[i];

        console.log(`${resultado} nota(s) de R$ ${notas[i]},00`);
    }

//Outra solução do problema usando While e forEach

// notas.forEach (elemento => {
//     let i=0
//     while (numero >= elemento){
//         numero -= elemento 
//         i++
//     }
//     console.log(`${i} nota(s) de R$ ${elemento},00`)
// })