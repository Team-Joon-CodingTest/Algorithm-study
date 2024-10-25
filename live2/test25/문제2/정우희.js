const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

const size = 4 * N - 3;

let starMap = Array.from({ length: size }, () => Array(size).fill(' '));

for (let i = 0; i < N; i++) {
  let start = 2 * i;
  let end = size - 2 * i - 1;

  for (let j = start; j <= end; j++) {
    starMap[start][j] = '*';
    starMap[end][j] = '*';
  }

  for (let j = start; j <= end; j++) {
    starMap[j][start] = '*';
    starMap[j][end] = '*';
  }
}

const result = starMap.map((row) => row.join('')).join('\n');
console.log(result);
