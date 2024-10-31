const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];

  const dp = Array(N + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 3; i <= N; i++) {
    if (i >= 3 && dp[i - 3] !== Infinity) {
      dp[i] = Math.min(dp[i], dp[i - 3] + 1);
    }
    if (i >= 5 && dp[i - 5] !== Infinity) {
      dp[i] = Math.min(dp[i], dp[i - 5] + 1);
    }
  }

  return dp[N] === Infinity ? -1 : dp[N];
}

console.log(solution(input));
