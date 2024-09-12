const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const N = parseInt(input[0], 10);
  const schedule = input.slice(1).map((line) => line.split(' ').map(Number));

  const dp = new Array(N + 1).fill(0);

  for (let i = N - 1; i >= 0; i--) {
    const [t, p] = schedule[i];
    if (i + t <= N) {
      dp[i] = Math.max(dp[i + 1], p + dp[i + t]);
    } else {
      dp[i] = dp[i + 1];
    }
  }

  console.log(dp[0]);
}

solution(input);
