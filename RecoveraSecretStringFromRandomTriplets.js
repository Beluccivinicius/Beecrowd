// var recoverSecret = function (triplets) {
//   let latters = triplets.reduce((acc, curr) => {
//     for (let i = 0; i < 3; i++) {
//       if (!acc[curr[i]]) {
//         acc[curr[i]] = [];
//         const anterior = curr.slice(0, i);
//         acc[curr[i]].push(...anterior);
//       } else {
//         const anterior = curr.slice(0, i);
//         acc[curr[i]].push(...anterior);
//       }
//     }
//     return acc;
//   }, {});

//   let keyWord = [];
//   const keys = Object.keys(latters);
//   do {
//     for (let words in latters) {
//       const isNext = (currentValue, i, arr) => keyWord.includes(currentValue);

//       const bool = latters[words].every(isNext);

//       if (bool) {
//         keyWord.push(words);
//         delete latters[words];
//       }
//     }
//   } while (keyWord.length < keys.length);

//   return keyWord.join("");
// };

const triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];

var recoverSecret = function (triplets) {
  for (var [first] of triplets) {
    if (triplets.every((tuple) => tuple.indexOf(first) <= 0)) {
      triplets
        .filter(([item]) => item == first)
        .forEach((tuple) => tuple.shift());
      return console.log(
        first + recoverSecret(triplets.filter((tuple) => tuple.length > 0))
      );
    }
  }
  return "";
};
console.log(recoverSecret(triplets1));
