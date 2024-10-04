const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M, K] = input[0];
  const path = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 1; i <= K; i++) {
    const [r, c] = input[i];
    path[r - 1][c - 1] = 1;
  }

  function dfs(x, y) {
    let size = 1;

    path[x][y] = 0;

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (let i = 0; i < directions.length; i++) {
      const dx = directions[i][0];
      const dy = directions[i][1];
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && path[nx][ny] === 1) {
        size += dfs(nx, ny);
      }
    }

    return size;
  }

  let maxFoodSize = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (path[i][j] === 1) {
        const currentFoodSize = dfs(i, j);
        maxFoodSize = Math.max(maxFoodSize, currentFoodSize);
      }
    }
  }

  return maxFoodSize;
}

console.log(solution(input));
