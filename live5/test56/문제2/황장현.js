const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const number = Array.from({ length: input }, (_, index) => index + 1);
  const result = [];

  for (let i = 0; i < input; i++) {
    const firstNumber = number.shift();
    result.push(firstNumber);
    number.push(number.shift());
  }
  return result.join(' ');
}

console.log(solution(input));
