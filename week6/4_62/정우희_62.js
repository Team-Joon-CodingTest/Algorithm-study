var uniquePaths = function (m, n) {
  // dp 배열 초기화
  const dp = Array(m)
    .fill()
    .map(() => Array(n).fill(1));

  // 0번째 행과 0번째 열을 제외한 나머지 셀에 대해 경로 계산
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 현재 셀의 경로 수는 위쪽 셀과 왼쪽 셀의 경로 수의 합
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // 마지막 셀에 저장된 값이 유일한 경로의 총 수
  return dp[m - 1][n - 1];
};
