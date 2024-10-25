const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const matrix = input.slice(1).map((line) => line.split(' ').map(Number));

const result = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let andResult = matrix[i][0];
  for (let j = 1; j < N; j++) {
    andResult &= matrix[i][j];
  }
  result[i] = andResult;
}

console.log(result.join(' '));
