function solution(land) {
  const N = land.length;

  const dp = Array.from({ length: N }, () => [0, 0, 0, 0]);

  dp[0] = land[0];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 4; j++) {
      dp[i][j] =
        Math.max(
          dp[i - 1][(j + 1) % 4],
          dp[i - 1][(j + 2) % 4],
          dp[i - 1][(j + 3) % 4]
        ) + land[i][j];
    }
  }

  return Math.max(...dp[N - 1]);
}
