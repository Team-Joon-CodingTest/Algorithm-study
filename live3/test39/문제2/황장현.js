const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const cost = input.slice(1);
  const dp = Array.from({ length: N }, () => Array(3).fill(0));

  dp[0][0] = cost[0][0];
  dp[0][1] = cost[0][1];
  dp[0][2] = cost[0][2];

  for (let i = 1; i < N; i++) {
    dp[i][0] = cost[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = cost[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = cost[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  const minCost = Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]);
  return minCost;
}

console.log(solution(input));
