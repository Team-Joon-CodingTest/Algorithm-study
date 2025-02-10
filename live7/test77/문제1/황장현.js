const fs = require('fs');
const input = fs
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const a = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        a[i] |= input[i + 1][j];
      }
    }
  }

  return a.join(' ');
}

console.log(solution(input));
