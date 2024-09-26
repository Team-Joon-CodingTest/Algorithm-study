const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  let size = input * 4 - 3;
  let arr = Array.from({ length: size }, () => Array(size).fill(' '));

  function star(x, y, size) {
    if (size === 1) {
      arr[x][y] = '*';
      return;
    }

    for (let i = 0; i < size; i++) {
      arr[x][y + i] = '*';
      arr[x + i][y] = '*';
      arr[x + size - 1][y + i] = '*';
      arr[x + i][y + size - 1] = '*';
    }
    star(x + 2, y + 2, size - 4);
  }
  star(0, 0, size);
  return arr.map((row) => row.join('')).join('\n');
}

console.log(solution(input));
