const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input.length;
  const result = new Set();

  function dfs(board, x, y, depth, num, result) {
    if (depth === 5) {
      result.add(num);
      return;
    }

    if (x > 0) {
      dfs(board, x - 1, y, depth + 1, num + board[x - 1][y].toString(), result);
    }

    if (x < 4) {
      dfs(board, x + 1, y, depth + 1, num + board[x + 1][y].toString(), result);
    }

    if (y > 0) {
      dfs(board, x, y - 1, depth + 1, num + board[x][y - 1].toString(), result);
    }

    if (y < 4) {
      dfs(board, x, y + 1, depth + 1, num + board[x][y + 1].toString(), result);
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      dfs(input, i, j, 0, input[i][j].toString(), result);
    }
  }
  return result.size;
}

console.log(solution(input));
