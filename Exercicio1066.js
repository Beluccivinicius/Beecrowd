var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const numeros =  lines.map((n)=>parseInt(n))

const ehevenOdd = () => {
    let i = 0
    let j = 0
    const contagem = numeros.forEach((element) => { 
        if(element % 2 == 0){
        i++
        } else if(element % 2 != 0){
            j++;
        }
    })
    return {i, j}
}
const negativopositivo = () => {
    let k = 0
    let l = 0
    const contagem2 = numeros.forEach ((element) =>{
        if (element > 0){
            k++
        } else if(element < 0){
            l++
        }
    } )
    return {k,l}
}
console.log(`${ehevenOdd().i} valor(es) par(es)\n${ehevenOdd().j} valor(es) impar(es)`)
console.log(`${negativopositivo().k} valor(es) positivo(s)\n${negativopositivo().l} valor(es) negativo(s)`)