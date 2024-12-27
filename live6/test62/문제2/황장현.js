const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const levels = input[1];
  levels.unshift(0);
  const Q = input[2][0];
  const result = [];

  const prefixSum = Array(N).fill(0);
  for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1];
    if (levels[i] > levels[i + 1]) {
      prefixSum[i]++;
    }
  }

  for (let i = 3; i < 3 + Q; i++) {
    const [x, y] = input[i];
    const miss = prefixSum[y - 1] - prefixSum[x - 1];
    result.push(miss);
  }
  return result.join('\n');
}

console.log(solution(input));
