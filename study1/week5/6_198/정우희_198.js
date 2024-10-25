var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // dp[i]는 i번째 집까지 고려했을 때의 최대 금액을 저장
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // 2번째 집부터 시작하여 최대 금액을 갱신
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  // 마지막 집까지 검사한 후 최대 금액 반환
  return dp[nums.length - 1];
};
