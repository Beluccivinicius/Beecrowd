// Read three integers and sort them in ascending order. After, print these values in ascending
// order, a blank line and then the values in the sequence as they were readed.

// Input
// The input contains three integer numbers.

// Output
// Present the output as requested above

// let array = [21, 7, -14]
// let ehMaior = array[0]
// let ehMenor = array[0]

// //https://www.section.io/engineering-education/sorting-algorithms-in-js/

// function bubbleSort(array){

//     //Outer pass
//     for(let i = 0; i < array.length; i++){

//     //Inner pass
//     for(let j = 0; j < array.length - i - 1; j++){

//     //Value comparison using ascending order
//     if(array[j + 1] < array[j]){

//     //Swapping
//     [array[j + 1],array[j]] = [array[j],array[j + 1]]
//             }
//         }
//     };
//     return array;
// };

// console.log(bubbleSort(array))

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const sortNumber = (lines) => {
  const splitString = lines[0].split(" ");

  const number = splitString.map((element) => +element);
  const notOrdering = number;

  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
      if (number[i] < number[j]) {
        let temp = number[i];

        number[i] = number[j];

        number[j] = temp;
      }
    }
  }
  number.forEach((e) => console.log(e));
  notOrdering.forEach((e) => console.log(e));
};

sortNumber(lines);
