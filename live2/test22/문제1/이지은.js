const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const arr = input.slice(1).map((row) => row.split(''));

  function countRepaints(board, startX, startY, firstColor) {
    let repaints = 0;
    const oppositeColor = firstColor === 'W' ? 'B' : 'W';

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const expectedColor = (i + j) % 2 === 0 ? firstColor : oppositeColor;
        if (board[startX + i][startY + j] !== expectedColor) {
          repaints++;
        }
      }
    }
    return repaints;
  }

  function findMinimumRepaints(board, N, M) {
    let minRepaints = Infinity;

    for (let i = 0; i <= N - 8; i++) {
      for (let j = 0; j <= M - 8; j++) {
        const repaintsW = countRepaints(board, i, j, 'W');
        const repaintsB = countRepaints(board, i, j, 'B');
        minRepaints = Math.min(minRepaints, repaintsW, repaintsB);
      }
    }

    return minRepaints;
  }

  return findMinimumRepaints(arr, N, M);
}

console.log(solution(input));
