// var containsDuplicate = function (nums) {
//   const filterElements = nums.filter((n, i) => nums.indexOf(n) == i);
//   return filterElements.length != nums.length;
// };

// UMA OPÇÃO - 77ms
var containsDuplicate = function (nums) {
  const filterElements = new Set(nums);

  return nums.length != filterElements.size;
};

//OUTRA OPÇÃO - 172ms
// var containsDuplicate = function (nums) {
//   const sortedNums = nums.sort();

//   for (let i = 0; i < sortedNums.length; i++) {
//     if (sortedNums[i + 1] == sortedNums[i]) return true;
//   }

//   return false;
// };

console.log(containsDuplicate(["vi", "vini", "v", "ni", "l", "v", "vi"]));
