const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const N = Number(input[0][0]);
  const board = input.slice(1).map((subArray) => subArray[0].split(''));
  const isVisited = Array.from({ length: N }, () => Array(N).fill(0));
  console.log(board);

  let max = Infinity;
  let tempMax = 1;
  function dfs(x, y, prevMove, step) {
    const directions = [
      [-1, 0, 'Left'],
      [1, 0, 'Down'],
      [0, -1, 'Up'],
      [0, 1, 'Right'],
    ];
    let currentStep = step;

    for (const [dx, dy, direction] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;

      if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N) {
        const currentColor = board[x][y];
        const nextColor = board[nextX][nextY];
        console.log(x, y, direction);

        if (
          !isVisited[nextX][nextY] &&
          currentColor === nextColor &&
          (step > 1 ? prevMove === direction : true)
        ) {
          currentStep++;
          dfs(nextX, nextY, direction, currentStep);
        } else return;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      isVisited[i][j] = 1;
      dfs(i, j, '', 0);
    }
  }

  //   if (max === N) return N;
}

console.log(solution(input));
