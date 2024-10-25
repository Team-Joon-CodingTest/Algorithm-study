const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  const N = Number(input);
  const size = 4 * N - 3;
  let pan = Array.from({ length: size }, () => Array(size).fill(' '));

  function makeSquare(x, y, n) {
    if (n === 1) {
      pan[x][y] = '*';
      return;
    }
    const len = 4 * n - 3;
    for (let i = 0; i < len; i++) {
      pan[x][y + i] = '*';
      pan[x + i][y] = '*';
      pan[x + len - 1][y + i] = '*';
      pan[x + i][y + len - 1] = '*';
    }
    makeSquare(x + 2, y + 2, n - 1);
  }

  makeSquare(0, 0, N);

  return pan.map((row) => row.join('')).join('\n');
}

console.log(solution(input));
