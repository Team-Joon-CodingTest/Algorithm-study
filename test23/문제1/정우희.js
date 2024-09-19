const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = input[0];
const M = input[1];

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function combination(n, k) {
  if (n < k) return 0;
  return factorial(n) / (factorial(k) * factorial(n - k));
}

const result = combination(M - 1, N - 1);
console.log(result);
