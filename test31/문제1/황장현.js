const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const T = input[0][0];
  const testCase = input(1);
  const primeNumbers = [2, 3];
  const maxPrimeNumber = 100000;
}

console.log(solution(input));
