// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//Uma opção = 105ms
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const isTheNumber = target - nums[i];

//     if (nums.includes(isTheNumber, i + 1)) {
//       console.log(nums.indexOf(isTheNumber));
//       return [i, nums.indexOf(isTheNumber, i + 1)];
//     }
//   }
// };

console.log(twoSum([3, 3], 6));
