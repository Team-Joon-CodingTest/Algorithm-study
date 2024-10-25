const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const paper = input.slice(1).map((line) => line.split(' ').map(Number));

let minusOneCount = 0;
let zeroCount = 0;
let plusOneCount = 0;

function check(x, y, size) {
  const firstValue = paper[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper[i][j] !== firstValue) {
        return false;
      }
    }
  }
  return true;
}

function divideAndConquer(x, y, size) {
  if (check(x, y, size)) {
    const value = paper[x][y];
    if (value === -1) minusOneCount++;
    else if (value === 0) zeroCount++;
    else if (value === 1) plusOneCount++;
  } else {
    const newSize = size / 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        divideAndConquer(x + i * newSize, y + j * newSize, newSize);
      }
    }
  }
}

divideAndConquer(0, 0, N);

console.log(minusOneCount);
console.log(zeroCount);
console.log(plusOneCount);
