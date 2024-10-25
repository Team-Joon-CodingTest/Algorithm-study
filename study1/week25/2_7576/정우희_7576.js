const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((s) => s.split(' '))
  .slice(0, -1);
const NM = input.shift();
const [n, m] = NM.map((el) => Number(el));
const board = input.map((s) => s.map((el) => Number(el)));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(row, col, board) {
  const q = [];
  const dist = [...Array(col)].map(() => Array(row).fill(0));
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === 1) {
        q.push([i, j]);
      }
      if (board[i][j] === 0) {
        dist[i][j] = -1;
      }
    }
  }
  let head = 0;
  while (q.length > head) {
    const [x, y] = q[head++];
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
      if (dist[nx][ny] >= 0) continue;
      dist[nx][ny] = dist[x][y] + 1;
      q.push([nx, ny]);
    }
  }

  let day = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (dist[i][j] === -1) return -1;
      day = Math.max(day, dist[i][j]);
    }
  }
  return day;
}

console.log(solution(n, m, board));
