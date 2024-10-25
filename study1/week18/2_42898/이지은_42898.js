function solution(m, n, puddles) {
  let answer = 0;
  let DP = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  DP[1][1] = 1;

  for (let i = 0; i < puddles.length; i++) {
    DP[puddles[i][1]][puddles[i][0]] = -1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (DP[i][j] === -1) continue;
      if (DP[i][j - 1] !== -1 && j - 1 > 0)
        DP[i][j] += DP[i][j - 1] % 1000000007;
      if (DP[i - 1][j] !== -1 && i - 1 > 0)
        DP[i][j] += DP[i - 1][j] % 1000000007;
    }
  }

  return DP[n][m] % 1000000007;
}
