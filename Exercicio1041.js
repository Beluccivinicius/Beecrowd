// Write an algorithm that reads two floating values (x and y), which should represent the coordinates of 
// a point in a plane. Next, determine which quadrant the point belongs, or if you are at one of the 
// Cartesian axes or the origin (x = y = 0).



// If the point is at the origin, write the message "Origem".

// If the point is at X axis write "Eixo X", else if the point is at Y axis write "Eixo Y".

// Input
// The input contains the coordinates of a point.

// Output
// The output should display the quadrant in which the point is.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let [x,y] = lines
switch (true){
    case x > 0 && y > 0:
        console.log(`Q1`);
    break;
    case x > 0 && y < 0:
        console.log(`Q4`);
    break;
    case x < 0 && y < 0:
        console.log(`Q3`);
    break;
    case x < 0 && y > 0:
        console.log(`Q2`);
    break
    case x == 0 && y == 0:
        console.log(`Origem`)
    break
    case x == 0 && y !== 0:
        console.log(`Eixo Y`)
    break
    case x !== 0 && y == 0:
        console.log(`Eixo X`)
    break
}

// if (x > 0 && y > 0){
//     console.log(`Q1`)
// }else if (x > 0 && y < 0){
//     console.log(`Q4`)
// }else if (x < 0 && y < 0){
//     console.log(`Q3`)
// }else if (x < 0 && y > 0){
//     console.log(`Q2`)
// }
// else if(x == 0 && y != 0){
//     console.log(`Eixo X`)
// }else if(x != 0 && y == 0){
//     console.log(`Eixo y`)
// }else {
//     console.log(`Origem`)
// }