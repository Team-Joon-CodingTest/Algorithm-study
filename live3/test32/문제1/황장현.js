const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const testCase = parseInt(input[0], 10);
  const results = [];
  let index = 1;

  for (let t = 0; t < testCase; t++) {
    const [H, W] = input[index].split(' ').map(Number);
    const grid = input
      .slice(index + 1, index + 1 + H)
      .map((line) => line.split(''));
    index += H + 1;

    const visited = Array.from({ length: H }, () => Array(W).fill(false));
    let sheepGroups = 0;

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    const dfs = (x, y) => {
      visited[x][y] = true;
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 &&
          nx < H &&
          ny >= 0 &&
          ny < W &&
          !visited[nx][ny] &&
          grid[nx][ny] === '#'
        ) {
          dfs(nx, ny);
        }
      }
    };

    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        if (!visited[i][j] && grid[i][j] === '#') {
          dfs(i, j);
          sheepGroups++;
        }
      }
    }

    results.push(sheepGroups);
  }

  return results.join('\n');
}

console.log(solution(input));
