function twoSum(numbers, target) {
  for (let i = 0; i < 3; i++) {
    if (numbers[i] + numbers[i + 1] == target) {
      return [i, i + 1];
    }

    if (numbers[i] + numbers[i + 2] == target) {
      return [i, i + 2];
    }
  }
}

// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   // Se nenhum par de elementos for encontrado, pode retornar algo indicando isso, como null.
//   return null;
// }

console.log(twoSum([5678, 1234, 9012], 14690));
