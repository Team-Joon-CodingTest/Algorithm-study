const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((a) => a.split(' ').map(Number));

function solution(input) {
  const N = Number(input[0]);
  const arr = input.slice(1);

  let count = { '-1': 0, 0: 0, 1: 0 };

  const check = (x, y, size) => {
    let first = arr[x][y];
    let same = true;

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== first) {
          same = false;
          break;
        }
      }
      if (!same) break;
    }

    if (same) {
      count[first]++;
    } else {
      let newSize = size / 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          check(x + i * newSize, y + j * newSize, newSize);
        }
      }
    }
  };

  check(0, 0, N);
  return `${count['-1']}\n${count['0']}\n${count['1']}`;
}

console.log(solution(input));
