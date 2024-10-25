const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const MAX = 1299709;
const sieve = new Array(MAX + 1).fill(true);
sieve[0] = sieve[1] = false;

for (let i = 2; i * i <= MAX; i++) {
  if (sieve[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      sieve[j] = false;
    }
  }
}

const primes = [];
for (let i = 2; i <= MAX; i++) {
  if (sieve[i]) primes.push(i);
}

function findPrimeGap(k) {
  if (sieve[k]) return 0;

  let lowerPrime = -1;
  for (let i = k - 1; i >= 2; i--) {
    if (sieve[i]) {
      lowerPrime = i;
      break;
    }
  }

  let upperPrime = -1;
  for (let i = k + 1; i <= MAX; i++) {
    if (sieve[i]) {
      upperPrime = i;
      break;
    }
  }

  return upperPrime - lowerPrime;
}

const T = input[0];
const results = [];

for (let i = 1; i <= T; i++) {
  const k = input[i];
  results.push(findPrimeGap(k));
}

console.log(results.join('\n'));
