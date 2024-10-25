const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [R, C, Q] = input[0];
  const picture = input.slice(1, R + 1);
  const boundary = input.slice(R + 1);
  const result = [];

  const prefixSum = Array(R)
    .fill(0)
    .map(() => Array(C).fill(0));

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      prefixSum[i][j] = picture[i][j];
      if (i > 0) prefixSum[i][j] += prefixSum[i - 1][j];
      if (j > 0) prefixSum[i][j] += prefixSum[i][j - 1];
      if (i > 0 && j > 0) prefixSum[i][j] -= prefixSum[i - 1][j - 1];
    }
  }

  for (let i = 0; i < Q; i++) {
    const [r1, c1, r2, c2] = boundary[i].map((num) => num - 1);
    const totalNum = (r2 - r1 + 1) * (c2 - c1 + 1);

    let sum = prefixSum[r2][c2];
    if (r1 > 0) sum -= prefixSum[r1 - 1][c2];
    if (c1 > 0) sum -= prefixSum[r2][c1 - 1];
    if (r1 > 0 && c1 > 0) sum += prefixSum[r1 - 1][c1 - 1];

    result.push(Math.floor(sum / totalNum));
  }
  return result.join('\n');
}

console.log(solution(input));
