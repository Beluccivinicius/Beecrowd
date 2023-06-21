var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let notas = lines[0]
    .split(' ')
    .map((n)=>+n);
let notaExam = +lines[1];
let [num1, num2, num3, num4] = notas;
const mediaAluno = () => {
    const media1 = ((num1 * 2) + (num2 * 3) + (num3 * 4) + (num4 * 1)) / 10 ;
    return media1
}
console.log(`Media: ${mediaAluno()}`)
const mediaExam = (exame) => {
    let exam = (mediaAluno() + exame) / 2
    return exam
}
if(mediaAluno() >= 7.0 ){
    console.log('Aluno aprovado')
} else if (mediaAluno() > 5.00 && mediaAluno() < 7.0){
    console.log('Aluno em exame')
    if(mediaExam(notaExam) >= 5)
    console.log(`Aluno aprovado\nMedia: ${mediaExam(notaExam)}`)
    else if(mediaExam(notaExam) < 5)
    console.log(`Aluno reprovado\nMedia: ${mediaExam(notaExam)}`)
}else console.log(`Aluno reprovado`)


// if (mediaAluno() >= 7.0){
//     console.log('Aluno aprovado.');
// } else if (mediaAluno() >= 5.0 &&  mediaAluno() <= 6.9){
//     novaMedia = (mediaAluno() + notaExam) / 2;
// if(novaMedia >= 5.00){
//     console.log(`Aluno em exame.\nNota do exame: ${notaExam.toFixed(1)}\nAluno aprovado.\nMedia final: ${novaMedia.toFixed(1)}`)
// }else if(novaNedia < 5.00){
//     console.log(`Aluno em exame.\nNota do exame: ${notaExam.toFixed(1)}\nAluno reprovado.\nMedia final: ${novaMedia.toFixed(1)}`)}
// } else if (mediaAluno() < 5.00){
//     console.log('Aluno reprovado.');
// } else{
//     console.log('Notas erradas.')
// }
