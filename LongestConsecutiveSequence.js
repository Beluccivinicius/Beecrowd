// leetcode.com/problems/longest-consecutive-sequence/description/
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const sortedNums = nums.sort((a, b) => a - b);
  let sequence = [];
  let consecutives = 1;

  for (let i = 0; i < nums.length; i++) {
    if (sortedNums[i + 1] - sortedNums[i] === 1) {
      consecutives = consecutives + 1;
      continue;
    } else if (sortedNums[i + 1] == sortedNums[i]) {
      continue;
    }
    sequence.push(consecutives);
    consecutives = 1;
  }
  const maior = sequence.sort((a, b) => a - b);

  return maior[maior.length - 1];
};
console.log(
  longestConsecutive([
    -4, -1, 4, -5, 1, -6, 9, -6, 0, 2, 2, 7, 0, 9, -3, 8, 9, -2, -6, 5, 0, 3, 4,
    -2,
  ])
);
