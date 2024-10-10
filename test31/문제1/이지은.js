const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [T] = input[0];
  const arr = input.slice(1).map(Number);
  const maxNum = 1299709;
  let primes = [];

  function findIsPrime(maxNum) {
    isPrime = Array(maxNum + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= maxNum; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
      for (let j = i * i; j <= maxNum; j += i) {
        isPrime[j] = false;
      }
    }
  }
  findIsPrime(maxNum);

  function findClosePrime(n) {
    let start = 0;
    let end = primes.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (n === primes[mid]) {
        return [0, 0];
      } else if (primes[mid] > n) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    const smallerPrime = primes[end]; // k보다 작은 가장 큰 소수
    const largerPrime = primes[start]; // k보다 큰 가장 작은 소수
    return [smallerPrime, largerPrime];
  }

  const results = [];
  for (let x of arr) {
    if (isPrime[x]) {
      results.push(0);
    } else {
      const [smallerPrime, largerPrime] = findClosePrime(x);
      const length = largerPrime - smallerPrime - 1;
      results.push(length + 1);
    }
  }

  return results.join('\n');
}

console.log(solution(input));
