const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, K] = input.shift();
  const seq = input[0];

  const prefixSum = Array.from({ length: N }).fill(0);
  const result = [];

  for (let i = 0; i < N; i++) {
    let nujukNum = 0;
    if (i > 0 && !isNaN(prefixSum[i - 1])) {
      nujukNum = prefixSum[i - 1];
    }
    prefixSum[i] = nujukNum + seq[i];
  }

  for (let i = 0; i <= N - K; i++) {
    let minusdesang = 0;
    if (i > 0 && !isNaN(prefixSum[i - 1])) {
      minusdesang = prefixSum[i - 1];
    }
    result.push(prefixSum[i + K - 1] - minusdesang);
  }
  return Math.max(...result);
}

console.log(solution(input));
