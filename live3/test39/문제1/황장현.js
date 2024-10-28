const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const T = input[0][0];
  const testCase = input.slice(1).flat();
  let result = [];

  const memo = Array(12).fill(0);
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;

  function dp(n) {
    if (memo[n] !== 0) return memo[n];

    memo[n] = dp(n - 1) + dp(n - 2) + dp(n - 3);
    return memo[n];
  }

  for (let i = 0; i < T; i++) {
    const n = testCase[i];
    result.push(dp(n));
  }

  return result.join('\n');
}

console.log(solution(input));
