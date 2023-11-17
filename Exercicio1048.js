// 0-400 400.01-800.00 800.01-1200,00 1200,01-2000,00 +2000,00

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let salario = +lines;

const ajustar = (salario) => {
  const salarios = [
    { salario: 400.0, ajuste: 15 },
    { salario: 800.0, ajuste: 12 },
    { salario: 1200.0, ajuste: 10 },
    { salario: 2000.0, ajuste: 7 },
    { salario: Infinity, ajuste: 4 },
  ];

  const faixa = salarios.filter((element) => element.salario >= salario);

  const obj = faixa[0];

  const ajustar = salario * (obj.ajuste / 100);
  const floatNumber = ajustar + salario;

  return {
    newSalary: floatNumber.toFixed(2),
    novoAjuste: ajustar.toFixed(2),
    percentual: obj.ajuste,
  };
};

function main(salario) {
  const infos = ajustar(salario);
  const { newSalary, novoAjuste, percentual } = infos;

  return `Novo salario: ${newSalary}\nReajuste ganho: ${novoAjuste}\nEm percentual: ${percentual}%`;
}

console.log(main(salario));
