// unknow number is ?
// the number can be (0,1,2,3,4,5,6,7,8,9)
//the expression can be *, - and +
//all the unknow number is the same number if more than one works,
//the lowest number is the correct
//NÃO CONSEGUI FAZER TODOS OS TESTES LINK: https://www.codewars.com/kata/546d15cebed2e10334000ed9/train/javascript

function solveExpression(exp) {
  let expression = exp.split("=");
  let operetors = ["+", "*", "-"];
  let retorno = -1;

  let op;
  let postionOp;
  for (let i = 0; i < 3; i++) {
    const positionOperetor = expression[0].indexOf(`${operetors[i]}`, 1);

    if (positionOperetor != -1) {
      op = i;
      postionOp = positionOperetor;
      break;
    }
  }

  for (let i = 0; i < 9; i++) {
    let numbers = expression[0].replaceAll("?", i);
    let resultFinal = expression[1].replaceAll("?", i);
    let resultNumbers;

    let firstNumber = parseInt(numbers.slice(0, postionOp));
    let secondNumber = parseInt(numbers.slice(postionOp + 1));

    const array = exp.split("");
    let notIncludes = array.includes(`${i}`);

    if (op == 0) {
      resultNumbers = firstNumber + secondNumber;
    }
    if (op == 1) {
      resultNumbers = firstNumber * secondNumber;
    }
    if (op == 2) {
      resultNumbers = firstNumber - secondNumber;
    }

    if (resultFinal == resultNumbers && resultFinal != 0 && !notIncludes) {
      return (retorno = i);
    }
  }

  return retorno;
}

console.log(solveExpression("?8?170-1?6256=7?2?14"));

//19--45=5?
