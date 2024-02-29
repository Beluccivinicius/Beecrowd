// https://leetcode.com/problems/top-k-frequent-elements/description/

var topKFrequent = function (nums, k) {
  const myObj = {};

  //Com esse loop 74ms
  //   for (let i = 0; i < nums.length; i++) {
  //     if (myObj[nums[i]]) {
  //       myObj[nums[i]]++;
  //     } else {
  //       myObj[nums[i]] = 1;
  //     }
  //   }

  //Com esse loop 66ms
  for (let number in nums) {
    if (myObj[nums[number]]) {
      myObj[nums[number]]++;
    } else {
      myObj[nums[number]] = 1;
    }
  }

  const keysObj = Object.keys(myObj);
  const sorted = keysObj.sort((a, b) => myObj[b] - myObj[a]);
  return sorted.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
