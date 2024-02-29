//leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNumbers = nums.sort();
  console.log(sortedNumbers);
  let numbers = [];
  for (let i = 0; i < nums.length; i++) {
    let a = sortedNumbers[i];

    if (a === sortedNumbers[i + 1]) continue;

    let left = sortedNumbers[i + 1];
    let right = sortedNumbers[nums.length - 1];
    for (let j; left < right; j++) {
      let result = a + left + right;
      console.log(result);

      if (result > 0) {
        right--;
        continue;
      }
      if (result < 0) {
        left++;
        continue;
      }

      if (result == 0) {
        numbers.push([a, left, right]);
      }
    }
  }
  return numbers;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
