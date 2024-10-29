const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const ANA = input[1];

  const dp = Array.from({ length: N }, () => Array(2).fill(0));

  dp[0][0] = 0;
  dp[0][1] = ANA[0];

  for (let i = 1; i < N; i++) {
    const cur = ANA[i];
    dp[i][0] = Math.max(dp[i - 1][0], cur - dp[i - 1][1]);
    dp[i][1] = Math.min(dp[i - 1][1], cur);
  }

  return dp[N - 1][0];
}

console.log(solution(input));
