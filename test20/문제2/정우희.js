const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function countMaxCandy(board, N) {
  let maxCount = 0;

  for (let i = 0; i < N; i++) {
    let count = 1;
    for (let j = 1; j < N; j++) {
      if (board[i][j] === board[i][j - 1]) {
        count++;
      } else {
        maxCount = Math.max(maxCount, count);
        count = 1;
      }
    }
    maxCount = Math.max(maxCount, count);
  }

  for (let j = 0; j < N; j++) {
    let count = 1;
    for (let i = 1; i < N; i++) {
      if (board[i][j] === board[i - 1][j]) {
        count++;
      } else {
        maxCount = Math.max(maxCount, count);
        count = 1;
      }
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}

function solution(input) {
  const N = parseInt(input[0]);
  let board = input.slice(1).map((row) => row.split(''));

  let maxCandy = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j + 1 < N) {
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
        maxCandy = Math.max(maxCandy, countMaxCandy(board, N));
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      }

      if (i + 1 < N) {
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
        maxCandy = Math.max(maxCandy, countMaxCandy(board, N));
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      }
    }
  }

  console.log(maxCandy);
}

solution(input);
