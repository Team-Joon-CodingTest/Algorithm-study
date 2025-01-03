const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [R, C, Q] = input[0];
  const picture = input.slice(1, R + 1);
  const scope = input.slice(R + 1);
  const result = [];

  const prefixSum = Array(R + 1)
    .fill(0)
    .map(() => Array(C + 1).fill(0));

  for (let i = 1; i <= R; i++) {
    for (let j = 1; j <= C; j++) {
      prefixSum[i][j] =
        prefixSum[i][j - 1] +
        prefixSum[i - 1][j] -
        prefixSum[i - 1][j - 1] +
        picture[i - 1][j - 1];
    }
  }

  for (const [r1, c1, r2, c2] of scope) {
    const sum =
      prefixSum[r2][c2] -
      prefixSum[r2][c1 - 1] -
      prefixSum[r1 - 1][c2] +
      prefixSum[r1 - 1][c1 - 1];
    const totalNumber = (r2 - (r1 - 1)) * (c2 - (c1 - 1));

    result.push(Math.floor(sum / totalNumber));
  }
  return result.join('\n');
}

console.log(solution(input));
