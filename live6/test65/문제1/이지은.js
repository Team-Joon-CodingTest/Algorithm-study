const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const N = parseInt(input[0], 10);
  const board = input.slice(1).map((row) => row.split(''));

  let maxCount = 0;

  function getMaxCandies(board) {
    let max = 0;

    // 가로 방향 검사
    for (let i = 0; i < N; i++) {
      let count = 1;
      for (let j = 1; j < N; j++) {
        if (board[i][j] === board[i][j - 1]) {
          count++;
        } else {
          max = Math.max(max, count);
          count = 1;
        }
      }
      max = Math.max(max, count);
    }

    for (let j = 0; j < N; j++) {
      let count = 1;
      for (let i = 1; i < N; i++) {
        if (board[i][j] === board[i - 1][j]) {
          count++;
        } else {
          max = Math.max(max, count);
          count = 1;
        }
      }
      max = Math.max(max, count);
    }

    return max;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j + 1 < N) {
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
        maxCount = Math.max(maxCount, getMaxCandies(board));
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      }
      if (i + 1 < N) {
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
        maxCount = Math.max(maxCount, getMaxCandies(board));
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      }
    }
  }

  return maxCount;
}

console.log(solution(input));
