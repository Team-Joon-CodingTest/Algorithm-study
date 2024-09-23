const fs = require('fs');
const [[N, M, K], ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

let answer = [];
const map = Array.from({ length: N }, () => Array(M).fill(0));
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
input.forEach(([y, x]) => {
  map[y - 1][x - 1] = 1;
});

let result = 1;
const dfs = (y, x) => {
  visited[y][x] = true;

  for (let k = 0; k < 4; k++) {
    let ny = y + dy[k];
    let nx = x + dx[k];

    if (
      ny >= 0 &&
      ny < N &&
      nx >= 0 &&
      nx < M &&
      map[ny][nx] === 1 &&
      !visited[ny][nx]
    ) {
      result += 1;
      dfs(ny, nx);
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      dfs(i, j);
      answer.push(result);
      result = 1;
    }
  }
}

console.log(Math.max(...answer));
