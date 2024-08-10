const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function solution(input) {
  const M = parseInt(input[0]);
  const N = parseInt(input[1]);

  let result = '';
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
      result += i + '\n';
    }
  }
  return result;
}

console.log(solution(input));
