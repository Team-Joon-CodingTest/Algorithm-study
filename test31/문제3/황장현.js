const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [n, m] = input[0];
  const drawInfo = input.slice(1);

  let drawNum = 0;
  let maxExtent = 0;

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function DFS(x, y) {
    let area = 1;
    visited[x][y] = true;

    for (const [directionX, directionY] of directions) {
      const nextX = x + directionX;
      const nextY = y + directionY;

      if (
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < m &&
        drawInfo[nextX][nextY] === 1 &&
        !visited[nextX][nextY]
      ) {
        area += DFS(nextX, nextY);
      }
    }
    return area;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (drawInfo[i][j] === 1 && !visited[i][j]) {
        drawNum++;
        const currentExtent = DFS(i, j);
        maxExtent = Math.max(maxExtent, currentExtent);
      }
    }
  }
  return [drawNum, maxExtent];
}

console.log(solution(input).join('\n'));
