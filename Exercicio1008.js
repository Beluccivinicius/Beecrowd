var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let [numberEmpoyee, hoursWorked, salary]= lines.map((n)=>+n)
const salario1 = (salario,horas) => salario*horas
console.log (`NUMBER = ${numberEmpoyee}`)
console.log (`SALARY = U$ ${salario1(hoursWorked,salary).toFixed(2)}`)

// let numerEmployee = lines [0]
// let hoursWorked = lines [1]
// let salary = lines [2]