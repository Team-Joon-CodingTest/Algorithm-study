const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(input) {
  const [M, N] = input;
  const result = [];
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result.join('\n');
}

console.log(solution(input));
