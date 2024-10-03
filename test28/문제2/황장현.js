const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [R, C] = input[0].split(' ').map(Number);

  const yard = input.slice(1).map((row) => row.split(''));

  const visited = Array.from({ length: R }, () => Array(C).fill(false));
  let totalSheep = 0;
  let totalWolves = 0;

  function bfs(x, y) {
    let sheep = 0;
    let wolves = 0;
    const starting = [[x, y]];

    visited[x][y] = true;

    if (yard[x][y] === 'o') sheep += 1;
    if (yard[x][y] === 'v') wolves += 1;

    while (starting.length > 0) {
      const [posX, posY] = starting.shift();

      if (
        posX - 1 >= 0 &&
        !visited[posX - 1][posY] &&
        yard[posX - 1][posY] !== '#'
      ) {
        visited[posX - 1][posY] = true;
        starting.push([posX - 1, posY]);
        if (yard[posX - 1][posY] === 'o') sheep += 1;
        if (yard[posX - 1][posY] === 'v') wolves += 1;
      }

      if (
        posX + 1 < R &&
        !visited[posX + 1][posY] &&
        yard[posX + 1][posY] !== '#'
      ) {
        visited[posX + 1][posY] = true;
        starting.push([posX + 1, posY]);
        if (yard[posX + 1][posY] === 'o') sheep += 1;
        if (yard[posX + 1][posY] === 'v') wolves += 1;
      }

      if (
        posY - 1 >= 0 &&
        !visited[posX][posY - 1] &&
        yard[posX][posY - 1] !== '#'
      ) {
        visited[posX][posY - 1] = true;
        starting.push([posX, posY - 1]);
        if (yard[posX][posY - 1] === 'o') sheep += 1;
        if (yard[posX][posY - 1] === 'v') wolves += 1;
      }

      if (
        posY + 1 < C &&
        !visited[posX][posY + 1] &&
        yard[posX][posY + 1] !== '#'
      ) {
        visited[posX][posY + 1] = true;
        starting.push([posX, posY + 1]);
        if (yard[posX][posY + 1] === 'o') sheep += 1;
        if (yard[posX][posY + 1] === 'v') wolves += 1;
      }
    }

    if (sheep > wolves) {
      totalSheep += sheep;
    } else {
      totalWolves += wolves;
    }
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (!visited[i][j] && yard[i][j] !== '#') {
        bfs(i, j);
      }
    }
  }

  return [totalSheep, totalWolves];
}

console.log(...solution(input));
