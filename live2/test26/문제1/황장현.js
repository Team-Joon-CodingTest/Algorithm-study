const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input.shift()[0];
  let blue = 0;
  let white = 0;

  function check(x, y, size) {
    let color = input[x][y];
    let isSame = true;

    for (let i = x; i < x + size; i++) {
      if (!input[i].slice(y, y + size).every((value) => value === color)) {
        isSame = false;
        break;
      }
    }

    if (isSame) {
      if (color === 1) blue++;
      else white++;
    } else {
      const newSize = size / 2;
      check(x, y, newSize);
      check(x, y + newSize, newSize);
      check(x + newSize, y, newSize);
      check(x + newSize, y + newSize, newSize);
    }
  }

  check(0, 0, N);

  console.log(white);
  console.log(blue);
}

solution(input);
