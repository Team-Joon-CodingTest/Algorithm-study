const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((el) => Number(el)));

function solution(input) {
  const [N, K] = input[0];
  const arr = input[1];
  let count = 0;
  const used = Array(N).fill(0);

  function backtrack(day, weight) {
    if (day === N) {
      count++;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!used[i]) {
        const newWeight = weight + arr[i] - K;

        if (newWeight >= 500) {
          used[i] = 1;
          backtrack(day + 1, newWeight);
          used[i] = 0;
        }
      }
    }
  }
  backtrack(0, 500);
  return count;
}
console.log(solution(input));
