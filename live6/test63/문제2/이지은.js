const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const n = input[0];
  const arr = input.slice(1).sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < n; i++) {
    answer += Math.abs(arr[i] - (i + 1));
  }
  return answer;
}

console.log(solution(input));
