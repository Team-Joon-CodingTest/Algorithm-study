const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const n = input[0][0];
  const m = input[1][0];

  const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

  for (let i = 1; i <= n; i++) {
    dist[i][i] = 0;
  }

  for (let i = 2; i < m + 2; i++) {
    const [a, b, c] = input[i];
    dist[a][b] = Math.min(dist[a][b], c);
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
  }

  const result = dist
    .slice(1)
    .map((row) =>
      row
        .slice(1)
        .map((value) => (value === Infinity ? 0 : value))
        .join(' ')
    )
    .join('\n');

  return result;
}

console.log(solution(input));
