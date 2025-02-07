const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const n = input[0][0];
  const num = input[0][1];
  const arr = input[1];

  let answer = 0;

  function backtrack(idx, sum, count) {
    if (idx === n) {
      if (count > 0 && sum === num) {
        answer++;
      }
      return;
    }

    backtrack(idx + 1, sum + arr[idx], count + 1);
    backtrack(idx + 1, sum, count);
  }

  backtrack(0, 0, 0);

  return answer;
}

console.log(solution(input));
