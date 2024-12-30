const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const N = input[0];
  const 예상등수들 = input.slice(1);
  예상등수들.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += Math.abs(예상등수들[i] - (i + 1));
  }
  return sum;
}

console.log(solution(input));
