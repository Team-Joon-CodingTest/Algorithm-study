const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('')
  .map(Number);

function solution(input) {
  let answer;
  if (input.reduce((a, b) => a + b) % 3 !== 0 || !input.includes(0)) {
    answer = -1;
  } else {
    answer = input.sort((a, b) => b - a).join('');
  }
  return answer;
}

console.log(solution(input));
