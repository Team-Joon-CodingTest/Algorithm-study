const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function findDivisors(n) {
  const divisors = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== 1 && i !== n / i && i !== n) divisors.push(n / i);
    }
  }
  return divisors.sort((a, b) => a - b);
}

function isPerfectNumber(n) {
  const divisors = findDivisors(n);
  const sum = divisors.reduce((acc, val) => acc + val, 0);
  return sum === n ? divisors : null;
}

function solution(input) {
  const results = [];
  for (let i = 0; i < input.length; i++) {
    const num = input[i];
    if (num === -1) break;

    const divisors = isPerfectNumber(num);
    if (divisors) {
      results.push(`${num} = ${divisors.join(' + ')}`);
    } else {
      results.push(`${num} is NOT perfect.`);
    }
  }

  return results.join('\n');
}

console.log(solution(input));
