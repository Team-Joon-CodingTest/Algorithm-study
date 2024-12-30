const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, K] = input[0];
  const field = input.slice(1);
  field.sort((a, b) => a[1] - b[1]);
  const prefixSum = new Array(N).fill(0);

  for (let i = 1; i <= field.length; i++) {}
}

console.log(solution(input));
