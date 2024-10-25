const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  let N = input[0];
  let answer = 0;
  let arr = input.splice(1, input.length).sort((a, b) => a - b);
  
  for (let i = 1; i <= N; i++) {
    answer += Math.abs(arr[i - 1] - i);
  }
  return answer;
}

console.log(solution(input));
