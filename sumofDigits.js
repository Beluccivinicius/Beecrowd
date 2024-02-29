// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has
// more than one digit, continue reducing in this way until a
// single-digit number is produced.
// The input will be a non-negative integer.

function digitalRoot(n) {
  let array = n.toString().split("");
  n = array.reduce((acc, curr) => Number(acc) + Number(curr));
  if (n.toString().split("").length > 1) {
    n = digitalRoot(n);
  }
  return Number(n);
}
//Other solution
// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }

console.log(digitalRoot(444));
