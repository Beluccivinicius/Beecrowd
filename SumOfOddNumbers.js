function rowSumOddNumbers(n) {
  let numberToSum = [];
  let lastNumber = 0;
  let sum;
  for (let j = 1; j <= n; j++) {
    for (let i = lastNumber; numberToSum.length < j; i++) {
      if (i % 2 != 0) {
        numberToSum.push(i);
      }

      if (numberToSum.length == n) {
        sum = numberToSum.reduce((acc, curr) => acc + curr);
      }

      if (numberToSum.length == j && numberToSum.length < n) {
        lastNumber = numberToSum.pop() + 1;
        numberToSum = [];
        break;
      }
    }
  }

  return sum;
}

console.log(rowSumOddNumbers(2));
