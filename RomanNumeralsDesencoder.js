//transfromando numeros Romanos em números Decimais

let roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function solution(number) {
  let valuesRoman = Object.keys(roman);
  let total = 0;
  for (let i = 0; i < number.length; i++) {
    if (valuesRoman.indexOf(number[i + 1]) <= valuesRoman.indexOf(number[i])) {
      total = total + roman[number[i]];
    }

    if (valuesRoman.indexOf(number[i + 1]) > valuesRoman.indexOf(number[i])) {
      let subtration = roman[number[i + 1]] - roman[number[i]];
      total = total + subtration;
      i++;
    }
  }
  return total;
}
console.log(solution("LXXX"));
