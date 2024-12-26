const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const nNumber = input[1];

  const prefixSum = new Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    prefixSum[i] = nNumber[i - 1] + prefixSum[i - 1];
  }

  const result = [];
  for (let k = 2; k < M + 2; k++) {
    const [i, j] = input[k];
    result.push(prefixSum[j] - prefixSum[i - 1]);
  }
  return result.join('\n');
}

console.log(solution(input));
