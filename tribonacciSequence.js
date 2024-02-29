//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature, n) {
  if (n < signature.length) {
    return signature.slice(0, n);
  }
  for (let i = 0; signature.length < n; i++) {
    const numbersToSum = signature.slice(-3);
    const sum = numbersToSum.reduce((acc, curr) => acc + curr, 0);
    signature.push(sum);
  }

  return signature;
}

console.log(tribonacci([1, 1, 1], 3));
