/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//   let newArray = [[]];
//   for (let i = 0; i < strs.length; i++) {
//     const ordenado = strs[i].split("").sort().join("");

//     for (let j = 0; j < newArray.length; j++) {
//       if (newArray[j].includes(ordenado)) {
//         newArray[j].push(strs[i]);
//         break;
//       }
//       if (j == newArray.length - 1) {
//         newArray.push([ordenado, strs[i]]);
//         break;
//       }
//     }
//   }
//   newArray.shift();
//   newArray.forEach((n) => n.shift());
//   return newArray;
// };

//Outra Opção
// var groupAnagrams = function (strs) {
//   const anagrams = strs.reduce((acc, curr) => {
//     const sorted = curr.split("").sort().join("");

//     if (acc[sorted]) {
//       acc[sorted].push(curr);
//     } else {
//       acc[sorted] = [curr];
//     }

//     return acc;
//   }, {});

//   return Object.values(anagrams);
// };

var groupAnagrams = function (strs) {
  const groups = {};

  for (let s of strs) {
    const sortedS = s.split("").sort().join();

    if (groups[sortedS] != null) {
      groups[sortedS].push(s);
    } else {
      groups[sortedS] = [s];
    }
  }

  return [...Object.values(groups)];
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
