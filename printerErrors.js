// https://www.codewars.com/kata/56541980fa08ab47a0000040/javascript

function printerError(s) {
  const alphabet = "abcdefghijklm";
  let correct = 0;
  for (let i = 0; i < s.length; i++) {
    const containAlphabet = alphabet.includes(`${s[i]}`);
    containAlphabet === false && correct++;
  }

  return `${correct}/${s.length}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
