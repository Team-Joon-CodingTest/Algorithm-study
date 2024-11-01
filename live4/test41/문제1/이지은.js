const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const T = Number(input[0]);

  const P = Array(101).fill(0);
  P[1] = 1;
  P[2] = 1;
  P[3] = 1;
  P[4] = 2;
  P[5] = 2;

  for (let i = 6; i <= 100; i++) {
    P[i] = P[i - 1] + P[i - 5];
  }

  const results = [];
  for (let i = 1; i <= T; i++) {
    const N = Number(input[i]);
    results.push(P[N]);
  }
  return results.join('\n');
}

console.log(solution(input));
