// Implement a function that adds two numbers together
// and returns their sum in binary. The conversion can
// be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  let decimalNumber = a + b;
  let binary = [];

  for (let i = 0, divisory = decimalNumber; divisory !== 0; i++) {
    const rest = divisory % 2;
    binary.push(rest);
    divisory = Math.floor(divisory / 2);
  }

  return binary.reverse().join("");
}
console.log(addBinary(51, 78));
