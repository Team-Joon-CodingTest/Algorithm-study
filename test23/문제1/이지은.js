const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const N = input[0];
  const M = input[1];

  function combination(n, r) {
    if (r > n) return 0;
    if (r === 0 || r === n) return 1;

    r = Math.min(r, n - r);
    let c = 1;

    for (let i = 0; i < r; i++) {
      c = (c * (n - i)) / (i + 1);
    }
    return c;
  }

  return combination(M - 1, N - 1);
}

console.log(solution(input));
