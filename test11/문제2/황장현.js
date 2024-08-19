const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [n, k] = input[0];
  const tasty = input[1];

  let currentSum = tasty.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = currentSum;

  for (let i = k; i < n; i++) {
    currentSum = currentSum - tasty[i - k] + tasty[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
}
console.log(solution(input));
