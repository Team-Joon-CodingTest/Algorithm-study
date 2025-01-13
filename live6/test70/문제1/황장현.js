const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const N = input[0];
  const M = input[1];

  const n = M - 1;
  const r = N - 1;

  let 분자 = 1;
  let 분모 = 1;

  for (let i = 0; i < r; i++) {
    분자 *= n - i;
    분모 *= r - i;
  }
  return 분자 / 분모;
}

console.log(solution(input));
