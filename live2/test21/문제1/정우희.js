const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const N = parseInt(input[0], 10);
  const board = input.slice(1).map((line) => line.split(' ').map(Number));

  const directions = [
    [0, 1],
    [1, 0],
  ];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  const queue = [[0, 0]];
  visited[0][0] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (board[x][y] === -1) {
      console.log('HaruHaru');
      return;
    }

    const step = board[x][y];

    for (const [dx, dy] of directions) {
      const nx = x + dx * step;
      const ny = y + dy * step;

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }

  console.log('Hing');
}

solution(input);
