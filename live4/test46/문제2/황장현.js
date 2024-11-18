const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const max = Math.max(...input) * 2;
  const isPrime = Array(max + 1).fill(true);
  for (let i = 2; i * i <= max; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const result = [];

  for (let n of input) {
    if (n === 0) break;
    let count = 0;
    for (let i = n + 1; i <= 2 * n; i++) {
      if (isPrime[i]) count++;
    }
    result.push(count);
  }

  return result.join('\n');
}

console.log(solution(input));
