/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  let dp = [];
  dp[1] = 1; // 첫 번째 계단에 도달하는 방법은 한 가지
  dp[2] = 2; // 두 번째 계단에 도달하는 방법은 두 가지

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
