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

  const prefixSum = Array(N + 1).fill(0);
  for (let i = 0; i < N; i++) {}

  console.log(prefixSum);

  for (let i = 3; i < 3 + Q; i++) {
    const [x, y] = input[i];
  }
}

console.log(solution(input));
