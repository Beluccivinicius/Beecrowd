function topThreeWords(text) {
  const words = text.split("\n").join(" ");
  const regexp = /[!@#$%^&*()_+={}\[\]:;<>,.?~\\/\|`"¬´-]/g;

  const quantity = words
    .replace(regexp, "")
    .split(" ")
    .reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});

  const objetoFDP = Object.keys(quantity);
  return objetoFDP
    .sort((wordA, wordB) => {
      return quantity[wordB] - quantity[wordA];
    })
    .slice(0, 3);
}

console.log(
  topThreeWords("e i e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
);
