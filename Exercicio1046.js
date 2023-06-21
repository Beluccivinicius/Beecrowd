// Read the start time and end time of a game, in hours. Then calculate the duration of the game,
//  knowing that the game can begin in a day and finish in another day, with a maximum duration of 
//  24 hours. The message must be printed in portuguese “O JOGO DUROU X HORA(S)” that means “THE GAME LASTED X HOUR(S)”

// Input
// Two integer numbers representing the start and end time of a game.

// Output
// Print the duration of the game as in the sample output.


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let horarios = lines.join(' ')
let [a, b] = horarios;
let tempo = 24

if (a > b){
    tempo = Math.abs(a - tempo) + b
} else if (a < b){
    tempo = Math.abs(a - b)
} 

console.log(`O JOGO DUROU ${tempo} HORA(S)`)