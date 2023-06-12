var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const [A,B,C,D]= lines.map((n)=>+n)
const diferenca = (j,k,l,m) => j*k-l*m 
console.log(`DIFERENCA = ${diferenca(A,B,C,D)}`)

// function produto(A,B,C,D){
//     const product = A*B-C*D
//     return product
// }

// const produto1 = (f,g,h,i) => {
//     const product = f*g-h*i
//     return product
// }

// console.log(`${produto(A,B,C,D)}`)
// console.log(`${produto1(A,B,C,D)}`)

// const A = lines[1]
// const B = lines[2]
// const C = lines[3]