// 0-400 400.01-800.00 800.01-1200,00 1200,01-2000,00 +2000,00

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let salario = +lines;

const salarios = [
  { salario: 400.0, ajuste: 15 },
  { salario: 800.0, ajuste: 12 },
  { salario: 1200.0, ajuste: 10 },
  { salario: 2000.0, ajuste: 7 },
  { salario: Infinity, ajuste: 4 },
];

const faixa = salarios.find((element) => element.salario >= salario);
const { ajuste } = faixa;

const ajustar = (salario, ajuste) => salario * (ajuste / 100);
const novoSalario = (salarioAtual) => {
  const salarioX = salarioAtual + ajustar(salario, ajuste);
  return salarioX;
};

function main() {
  console.log(
    `Novo salario: ${novoSalario(salario).toFixed(
      2
    )}\nReajuste ganho: ${ajustar(salario, ajuste).toFixed(
      2
    )}\nEm percentual: ${ajuste}%`
  );
}

main();
