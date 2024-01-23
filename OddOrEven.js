function oddOrEven(array) {
  let oddEven = array.reduce((acc, curr) => acc + curr);
  return oddEven % 2 != 0 ? "odd" : "even";
}

console.log(oddOrEven([0, -1, -5]));
