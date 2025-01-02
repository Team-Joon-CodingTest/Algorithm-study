const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, K] = input[0];
  const field = input.slice(1);

  const maxPosition = 1000000;
  const ice = new Array(maxPosition + 1).fill(0);

  for (const [gi, xi] of field) {
    ice[xi] += gi;
  }

  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i <= Math.min(2 * K, maxPosition); i++) {
    currentSum += ice[i];
  }
  maxSum = currentSum;

  for (let i = 1; i + 2 * K <= maxPosition; i++) {
    currentSum -= ice[i - 1];
    currentSum += ice[i + 2 * K];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(solution(input));
