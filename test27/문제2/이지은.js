const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, S] = input[0];
  const [arr] = input.slice(1);
  let count = 0;

  function calculate(start, sum, used) {
    if (used) {
      if (sum === S) {
        count++;
      }
    }

    for (let i = start; i < N; i++) {
      calculate(i + 1, sum + arr[i], true);
    }
  }
  calculate(0, 0, false);
  return count;
}

console.log(solution(input));
