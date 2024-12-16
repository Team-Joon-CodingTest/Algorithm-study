const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function goIndex() {}

function solution(input) {
  const N = input[0][0];
  const ballons = input[1];
  const ballonsRef = [...ballons];

  const first = ballons.shift();
}

console.log(solution(input));
