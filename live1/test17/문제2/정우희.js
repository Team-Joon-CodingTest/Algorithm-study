const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const array = input
    .slice(1, N + 1)
    .map((line) => line.split(' ').map(Number));
  const K = parseInt(input[N + 1], 10);
  const queries = input.slice(N + 2).map((line) => line.split(' ').map(Number));

  const prefixSum = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      prefixSum[i][j] =
        array[i - 1][j - 1] +
        prefixSum[i - 1][j] +
        prefixSum[i][j - 1] -
        prefixSum[i - 1][j - 1];
    }
  }

  const result = [];

  for (let [i, j, x, y] of queries) {
    const sum =
      prefixSum[x][y] -
      (i > 1 ? prefixSum[i - 1][y] : 0) -
      (j > 1 ? prefixSum[x][j - 1] : 0) +
      (i > 1 && j > 1 ? prefixSum[i - 1][j - 1] : 0);
    result.push(sum);
  }

  console.log(result.join('\n'));
}

solution(input);
