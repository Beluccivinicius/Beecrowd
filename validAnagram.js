//   @param {string} s
//   @param {string} t
//  @return {boolean}

//Uma opção = 1060ms
// var isAnagram = function (s, t) {
//   const wordToCompare = t.split("");
//   const realWord = s.split("");

//   if (s.length != t.length) return false;

//   for (let i = 0; i < realWord.length; i++) {
//     const anagram = wordToCompare.includes(realWord[i]);

//     if (anagram === false) return false;

//     wordToCompare.splice(wordToCompare.indexOf(realWord[i]), 1);
//   }

//   return true;
// };

//Outra opção - 1075ms
// var isAnagram = function (s, t) {
//   const wordToCompare = t.split("");
//   const realWord = s.split("");

//   if (s.length != t.length) return false;

//   let anagram = true;
//   realWord.forEach((element) => {
//     if (wordToCompare.includes(element)) {
//       wordToCompare.splice(wordToCompare.indexOf(element), 1);
//     } else {
//       anagram = false;
//     }
//   });

//   return anagram;
// };

//Outra opção - 84ms
// var isAnagram = function (s, t) {
//   return t.split("").sort().join("") === s.split("").sort().join("");
// };

console.log(isAnagram("anagram", "nagaram"));

const thisArray = [1, 1, 2, 3, 4, 3];
console.log(thisArray.shift(1));
console.log(thisArray.shift(3));
console.log(thisArray);
