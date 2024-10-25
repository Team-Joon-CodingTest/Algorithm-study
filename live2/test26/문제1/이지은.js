const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((el) => Number(el)));

function solution(input) {
  let blue = 0;
  let white = 0;
  const N = Number(input[0]);
  const arr = input.slice(1);

  function paper(x, y, size) {
    const first = arr[x][y];

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== first) {
          let half = size / 2;
          paper(x, y, half);
          paper(x + half, y, half);
          paper(x, y + half, half);
          paper(x + half, y + half, half);
          return;
        }
      }
    }
    if (first === 1) {
      blue++;
    } else {
      white++;
    }
  }
  paper(0, 0, N);

  console.log(white);
  console.log(blue);
}

solution(input);
