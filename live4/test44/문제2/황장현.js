const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const testCase = input[0];
  const result = 0;
  for (let i = 1; i <= testCase; i++) {
    const num = input[i];
    const isPrime = true;
    for (let i = 2; i * i < num; i++) {
      if (num % i === 0) isPrime = false;
    }
  }
}

console.log(solution(input));
