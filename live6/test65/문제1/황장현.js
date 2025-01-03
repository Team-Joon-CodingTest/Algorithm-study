const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const N = Number(input[0]);
  const board = input.slice(1).map((row) => row.split(''));
  let max = 0;

  function getMaxCandy(board) {
    let maxLength = 0;

    for (let i = 0; i < N; i++) {
      let count = 1;
      for (let j = 1; j < N; j++) {
        if (board[i][j] === board[i][j - 1]) {
          count++;
        } else {
          maxLength = Math.max(maxLength, count);
          count = 1;
        }
      }
      maxLength = Math.max(maxLength, count);
    }

    for (let j = 0; j < N; j++) {
      let count = 1;
      for (let i = 1; i < N; i++) {
        if (board[i][j] === board[i - 1][j]) {
          count++;
        } else {
          maxLength = Math.max(maxLength, count);
          count = 1;
        }
      }
      maxLength = Math.max(maxLength, count);
    }

    return maxLength;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j + 1 < N) {
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
        max = Math.max(max, getMaxCandy(board));
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      }

      if (i + 1 < N) {
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
        max = Math.max(max, getMaxCandy(board));
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      }
    }
  }

  return max;
}

console.log(solution(input));
