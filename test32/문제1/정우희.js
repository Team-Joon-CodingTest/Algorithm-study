const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let index = 0;
const T = parseInt(input[index++]);

function dfs(grid, visited, x, y, H, W) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  visited[x][y] = true;

  for (let dir of directions) {
    const newX = x + dir[0];
    const newY = y + dir[1];

    if (
      newX >= 0 &&
      newX < H &&
      newY >= 0 &&
      newY < W &&
      !visited[newX][newY] &&
      grid[newX][newY] === '#'
    ) {
      dfs(grid, visited, newX, newY, H, W);
    }
  }
}

for (let t = 0; t < T; t++) {
  const [H, W] = input[index++].split(' ').map(Number);
  const grid = [];
  for (let i = 0; i < H; i++) {
    grid.push(input[index++].split(''));
  }

  const visited = Array.from({ length: H }, () => Array(W).fill(false));
  let sheepGroups = 0;

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (!visited[i][j] && grid[i][j] === '#') {
        dfs(grid, visited, i, j, H, W);
        sheepGroups++;
      }
    }
  }

  console.log(sheepGroups);
}
