//www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
function lastDigit(n, m) {
  let padraoPotencia = { 1: n ** 1n, 2: n ** 2n, 3: n ** 3n, 0: n ** 4n };

  let sobra = parseInt(m % 4n);

  if (m == 0) return 1n;

  let lastNumber = padraoPotencia[sobra];

  let oi = lastNumber.toString().split("");

  return BigInt(oi[oi.length - 1]);
}

console.log(lastDigit(2n, 4n));
