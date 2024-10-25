const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const paper = input.slice(1).map((line) => line.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let visited = Array.from({ length: n }, () => Array(m).fill(false));

let numberOfPictures = 0;
let maxArea = 0;

function bfs(x, y) {
  let queue = [[x, y]];
  visited[x][y] = true;
  let area = 1;

  while (queue.length > 0) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        !visited[nx][ny] &&
        paper[nx][ny] === 1
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        area++;
      }
    }
  }
  return area;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (paper[i][j] === 1 && !visited[i][j]) {
      const area = bfs(i, j);
      numberOfPictures++;
      maxArea = Math.max(maxArea, area);
    }
  }
}

console.log(numberOfPictures);
console.log(maxArea);
