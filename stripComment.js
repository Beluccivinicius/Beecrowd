//Não entendi: https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

function solution(text, markers) {
  const padrao = /[#!]/g;

  text.match(padrao);
}
const texto = "Exemplo de texto com #hashtag e uma !exclamação";
const padrao = /[#!]/g;
const resultado = texto.match(padrao);
const index1 = texto.indexOf(resultado[0]);
const index2 = texto.indexOf(resultado[1]);

const fruit = texto.split("");
fruit.splice(index2, texto.length).join(" ");
console.log(fruit);
let result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
  "#",
  "!",
]);
// result should == "apples, pears\ngrapes\nbananas"
