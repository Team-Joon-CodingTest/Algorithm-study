/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] === nums[i - 1] + 1) {
      sum += nums[i];
    } else {
      break;
    }
  }

  let x = sum;
  while (nums.includes(x)) {
    x++;
  }
  return x;
};
