//leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0, j = numbers.length - 1, k = 0; k < numbers.length; k++) {
    if (numbers[i] + numbers[j] > target) {
      j--;
      continue;
    }
    if (numbers[i] + numbers[j] < target) {
      i++;
      continue;
    }

    return [i + 1, j + 1];
  }
};

console.log(twoSum([2, 3, 4, 14, 18], 18));
