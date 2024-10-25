const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const A = input[1];
  const B = input[2];
  const SumArray = [...A, ...B];

  SumArray.sort((a, b) => a - b);

  return SumArray.join(' ');
}

console.log(solution(input));
