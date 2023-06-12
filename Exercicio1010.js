// In this problem, the task is to read a code of a product 1, the number of units of product 1, 
// the price for one unit of product 1, the code of a product 2, the number of units of product 
// 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

// Input
// The input file contains two lines of data. In each line there will be 3 values: two integers and 
// a floating value with 2 digits after the decimal point.

// Output
// The output file must be a message like the following example where "Valor a pagar" means Value to Pay.
// Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.




var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let f = lines[0].split(' ')
let g = lines[1].split(' ')
let 
let total = 0


// f.forEach ((infos) => {
//     const numeros = infos.split(' ');
//     let [codigo,quantidade, preco] = numeros.map((n)=>+n);
//     if (typeof quantidade === 'number' && typeof preco === 'number'){
//     let valor = quantidade*preco;
//     total += valor
//         }
//     }
// )
console.log(`VALOR A PAGAR: R$ ${g``}`)

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// let total = 0

// lines.forEach((a) => {
//     const prod = a.split(' ')
//     const [id, qtde, preco] = prod.map(num => parseFloat(num))
//     if (typeof qtde === 'number' && typeof preco === 'number'){
//         let valor = qtde * preco
//         total += valor 
//     }
// });

// console.log(VALOR A PAGAR: R$ ${total.toFixed(2)})



// lines.forEach (a => {
//         const prod = a.split('');
//         const  [id, qtde, preco] = prod.map(a=>Number);
//         let valor = qtde * preco;
//         total += valor;
//     })
//     console.log(`${total}`)

    // )
    // function soma (){
    //     const produto1 = lines[0].split(' ')
    //     const produto2 = lines[1].split(' ')

    // }
    // console.log {produto1}


// let total = 0;

// lines.forEach(a => {
//     const prod = a.split(' ')
//     const [id, qtde, preco] = prod.map(num => +num);

//     let valor = qtde * preco;
//     total += valor ;
// });



// const produto1 = lines[0].split(' ');
// const produto2 = lines[1].split(' ');
// const [codigo1, qtd1, preco1] = produto1.map((n)=>+n)
// const [codigo2, qtd2, preco2] = produto2.map((n)=>+n)
// const total = (qtd1 * preco1) + (qtd2 * preco2)

// console.log (total.toFixed(2))





// class product{
//     constructor (code, units, price){
//         this.code = code;
//         this.units = units;
//         this.price = price;
//     