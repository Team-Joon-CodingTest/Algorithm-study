const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(input) {
  const testCase = input[0];
  const result = [];
  for (let i = 1; i <= testCase; i++) {
    let num = input[i];
    while (!isPrime(num)) {
      num++;
    }
    result.push(num);
  }
  return result.join('\n');
}

console.log(solution(input));
