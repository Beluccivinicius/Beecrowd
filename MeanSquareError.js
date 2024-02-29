// DESCRIPTION:
// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding
// member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value
// difference between each member pair.

function solution(firstArray, secondArray) {
  let arrayNumber = [];
  for (let i = 0; i < firstArray.length; i++) {
    let difference = firstArray[i] - secondArray[i];
    let lastNumber = difference * difference;
    arrayNumber.push(lastNumber);
  }
  return (
    arrayNumber.reduce((acc, curr) => {
      return acc + curr;
    }) / firstArray.length
  );
}

console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));
