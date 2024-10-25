/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length; // 행
  const n = grid[0].length; // 열

  // DP 그리드 초기화
  const dp = Array.from(Array(m), () => Array(n).fill(0));

  // 진행방향이 2개 이므로(오른쪽, 아래) 가장자리는 path sum은 고정
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};
