var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  // DP 배열 초기화
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  dp[0][0] = grid[0][0]; // 시작 지점 초기화

  // 첫 번째 행 계산
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  // 첫 번째 열 계산
  for (let j = 1; j < m; j++) {
    dp[j][0] = dp[j - 1][0] + grid[j][0];
  }

  // 나머지 칸 계산
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1]; // 오른쪽 하단 칸의 값 계산
};
