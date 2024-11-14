const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  const N = Number(input);
  if (N % 2 === 0) {
    return 'SK';
  } else return 'CY';
}

console.log(solution(input));
