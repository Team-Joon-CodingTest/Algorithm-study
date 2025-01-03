const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const schedule = input.slice(1);
  const dp = new Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    const [duration, profit] = schedule[i];

    if (i + duration > N) {
      continue;
    }
    dp[i] += profit;

    for (let j = i + duration; j < N; j++) {
      dp[j] = Math.max(dp[j], dp[i]);
    }
  }
  return Math.max(...dp);
}

console.log(solution(input));
