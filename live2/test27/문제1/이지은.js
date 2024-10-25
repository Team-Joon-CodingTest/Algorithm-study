const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((el) => Number(el)));

function solution(input) {
  const N = parseInt(input[0]);
  const arr = input.slice(1);

  let result = Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        result[i] |= arr[i][j];
      }
    }
  }
  return result.join(' ');
}

console.log(solution(input));
