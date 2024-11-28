const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const N = Number(input[0]);
  const countMap = new Map();
  for (let i = 1; i <= N; i++) {
    const bookName = input[i];
    countMap.set(bookName, (countMap.get(bookName) || 0) + 1);
  }

  let maxKey = '';
  let maxValue = 0;

  for (const [key, value] of countMap) {
    if (value > maxValue || (value === maxValue && key < maxKey)) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
}

console.log(solution(input));
