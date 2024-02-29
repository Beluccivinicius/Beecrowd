var productExceptSelf = function (nums) {
  let prefix = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      prefix[i] = prefix[i - 1] * nums[i - 1];
      continue;
    }

    prefix[0] = 1;
  }

  let sufix = new Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) {
      sufix[i] = 1;
      continue;
    }

    sufix[i] = sufix[i + 1] * nums[i + 1];
  }

  let arrayReturn = [];
  for (let i = 0; i < sufix.length; i++) {
    arrayReturn[i] = sufix[i] * prefix[i];
  }
  return arrayReturn;
};

console.log(productExceptSelf([1, 2, 3, 4]));

// var productExceptSelf = function (nums) {
// let res = new Array(nums.length);
// let cur = 1;
// for (let i = 0; i < nums.length; i++) {
//   res[i] = cur;
//   cur *= nums[i];
// }
// console.log(res);
// cur = 1;
// for (let i = nums.length - 1; i >= 0; i--) {
//   res[i] *= cur;
//   console.log(res[i] + "oo");
//   console.log(cur + "ii");
//   cur *= nums[i];
//   console.log(cur);
// }
// return res;
// };
