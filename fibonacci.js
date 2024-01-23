// fib(0) := 0
// fib(1) := 1
// fib(n + 2) := fib(n + 1) + fib(n)

//https://www.codewars.com/kata/53d40c1e2f13e331fc000c26

//fib(3 + 2) = 3+1 + 3
const fib = (n) => {
  let nextNumber;
  const spiral = [0, 1, 1, 2];

  if (n < 4) {
    const newArray = spiral.slice(0, n);
    return newArray;
  }

  for (let i = 4; i < n + 1; i++) {
    nextNumber = spiral[i - 1] + spiral[i - 2];
    spiral.push(nextNumber);
  }
  const lastNumber = spiral[2000];

  return lastNumber;
};

console.log(fib(2000000));
