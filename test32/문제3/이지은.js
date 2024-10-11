const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [K, N] = input[0].split(' ').map(Number);
const lines = input.slice(1).map(Number);

let left = 1;
let right = Math.max(...lines);

function countPieces(length) {
  return lines.reduce((count, line) => count + Math.floor(line / length), 0);
}

let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const pieces = countPieces(mid);

  if (pieces >= N) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
