var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numeros = lines.map((n) => parseInt(n))

let par = (numeros) => {
    let i = 0
    let ehPar = numeros.forEach((element) => {
        if(element % 2 === 0)
        i++
    })
    return i
}

let main = () => console.log(`${par(numeros)} valores pares`)

main()
