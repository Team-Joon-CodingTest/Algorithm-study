const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input.shift();
  const twodim = input.slice(0, N);
  const K = input[N][0];
  const ijxy = input.slice(N + 1);

  const result = [];

  const prefixSum = Array(N)
    .fill(0)
    .map(() => Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      prefixSum[i][j] = twodim[i][j];
      if (i > 0) prefixSum[i][j] += prefixSum[i - 1][j];
      if (j > 0) prefixSum[i][j] += prefixSum[i][j - 1];
      if (i > 0 && j > 0) prefixSum[i][j] -= prefixSum[i - 1][j - 1];
    }
  }

  for (let a = 0; a < K; a++) {
    const [i, j, x, y] = ijxy[a].map((v) => v - 1);

    let sum = prefixSum[x][y];
    if (i > 0) sum -= prefixSum[i - 1][y];
    if (j > 0) sum -= prefixSum[x][j - 1];
    if (i > 0 && j > 0) sum += prefixSum[i - 1][j - 1];

    result.push(sum);
  }

  return result.join('\n');
}

console.log(solution(input));
