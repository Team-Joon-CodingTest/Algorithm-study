const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const T = input[0][0];
  const result = [];

  for (let i = 1; i <= T; i++) {
    const N = input[i];

    const dp = Array(N + 1).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 2;
    dp[5] = 2;
    for (let j = 6; j <= N; j++) {
      dp[j] = dp[j - 5] + dp[j - 1];
    }
    result.push(dp[N]);
  }
  return result.join('\n');
}

console.log(solution(input));
