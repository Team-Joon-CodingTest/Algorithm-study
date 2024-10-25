const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const chessboard = input.slice(1);

  let minRepaints = Infinity;

  for (let a = 0; a <= N - 8; a++) {
    for (let b = 0; b <= M - 8; b++) {
      let case1 = 0;
      let case2 = 0;

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const currentCell = chessboard[a + i][b + j];
          if ((i + j) % 2 === 0) {
            if (currentCell !== 'W') case1++;
            if (currentCell !== 'B') case2++;
          } else {
            if (currentCell !== 'B') case1++;
            if (currentCell !== 'W') case2++;
          }
        }
      }

      minRepaints = Math.min(minRepaints, case1, case2);
    }
  }

  return minRepaints;
}

console.log(solution(input));
