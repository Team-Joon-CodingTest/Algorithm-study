const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [n, k] = input[0];
  const tasty = input[1];

  let maxSum = 0,
    currentSum = 0;

  let left = 0,
    right = k;

  for (let i = 0; i < k; i++) maxSum += tasty[i];
  currentSum = maxSum;

  if (right === n) {
    return maxSum;
  }

  while (left < n) {
    currentSum = currentSum - tasty[left++] + tasty[right++];

    if (currentSum > maxSum) maxSum = currentSum;

    if (right === n) right = 0;
  }

  return maxSum;
}
console.log(solution(input));
