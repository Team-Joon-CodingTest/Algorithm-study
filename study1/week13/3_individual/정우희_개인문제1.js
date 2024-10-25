var countPairs = function (nums, target) {
  const length = nums.length;
  let answer = 0;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] < target) answer++;
    }
  }

  return answer;
};
