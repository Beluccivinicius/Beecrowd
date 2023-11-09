var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let qtd = +lines;

//  Faça um programa que leia um
// número n e imprima n linhas na tela
// com o seguinte formato (exemplo
// se n = 5):
// ●
// Saída
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 1; i <= qtd; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
    if (j == 5) {
      for (let k = qtd - 1; k > 0; k--) {
        for (let l = k; l > 0; l--) {
          console.log(l);
        }
      }
    }
  }
}
