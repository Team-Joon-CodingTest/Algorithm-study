const { join } = require('path');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const N = Number(input[0]);

  let books = new Map();
  let answer = [];

  for (let i = 1; i <= N; i++) {
    if (books.has(input[i])) {
      books.set(input[i], books.get(input[i]) + 1);
      books.get(input[i]) + 1;
    } else {
      books.set(input[i], 1);
    }
  }

  let maxKey = '';
  let maxValue = 0;
  books.forEach((value, key) => {
    if (maxValue < value || (maxValue === value && maxKey > key)) {
      maxKey = key;
      maxValue = value;
    }
    return maxKey;
  });
  return maxKey;
}

console.log(solution(input));
