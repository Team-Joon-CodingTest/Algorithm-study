const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [n, k] = input[0];
  const arr = input[1];

  let prefixSum = [];
  let start = 0;
  let end = k - 1;

  let num = 0;
  for (let j = 0; j < n - k + 1; j++) {
    num = 0;
    for (let i = 0; i < k; i++) {
      num += arr[i + start];
    }
    start++;
    prefixSum.push(num);
  }
  return Math.max(...prefixSum);
}

console.log(solution(input));
