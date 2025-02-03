const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const n = input[0][0];
  const arr = input.slice(1);

  let minDiff = Infinity;

  function backtrack(idx, sour, bitter, count) {
    if (count > 0) {
      minDiff = Math.min(minDiff, Math.abs(sour - bitter));
    }

    if (idx >= n) return;

    const [s, b] = arr[idx];
    backtrack(idx + 1, sour * s, bitter + b, count + 1);

    backtrack(idx + 1, sour, bitter, count);
  }

  backtrack(0, 1, 0, 0);
  return minDiff;
}
console.log(solution(input));
