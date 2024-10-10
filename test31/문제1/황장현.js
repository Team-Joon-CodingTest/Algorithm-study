const fs = require('fs');
const input = fs
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
  const T = input[0];
  const testCases = input.slice(1);
  const results = [];

  for (let i = 0; i < T; i++) {
    const k = testCases[i];

    if (isPrime(k)) {
      results.push(0);
      continue;
    }

    let prevPrime = k - 1;
    let nextPrime = k + 1;

    while (prevPrime > 1 && !isPrime(prevPrime)) {
      prevPrime--;
    }

    while (!isPrime(nextPrime)) {
      nextPrime++;
    }

    results.push(nextPrime - prevPrime);
  }

  return results.join('\n');
}

console.log(solution(input));
