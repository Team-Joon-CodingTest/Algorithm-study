var uniquePaths = function (m, n) {
  // dp 테이블 초기화
  const dp = Array(m)
    .fill()
    .map(() => Array(n).fill(1));

  // 각 셀을 순회하면서 경로의 수를 계산
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // 오른쪽 하단 셀에 도달할 수 있는 경로의 수 반환
  return dp[m - 1][n - 1];
};
