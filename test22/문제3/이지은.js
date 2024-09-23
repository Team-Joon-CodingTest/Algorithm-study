const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  let [N, A, B] = input;
  let answer = 0;
  while (A !== B) {
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    answer++;
  }

  return answer;
}

console.log(solution(input));
