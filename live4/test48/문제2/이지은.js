const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findDivisors(n) {
  const divisors = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }
  return divisors.sort((a, b) => a - b);
}

function solution(input) {
  const [R, G] = input;
  const gcdValue = gcd(R, G);
  const divisors = findDivisors(gcdValue);

  divisors.forEach((N) => {
    const X = R / N;
    const Y = G / N;
    console.log(N, X, Y);
  });
}

solution(input);
