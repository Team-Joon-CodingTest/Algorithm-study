const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const calendar = input.slice(1).map(([T, P]) => ({ T, P }));
  let maxProfit = 0;

  function dfs(day, profit) {
    if (day > N) {
      maxProfit = Math.max(maxProfit, profit);
      return;
    }

    dfs(day + 1, profit);

    if (day < N && day + calendar[day].T < N + 1) {
      dfs(day + calendar[day].T, profit + calendar[day].P);
    }
  }

  dfs(0, 0);

  return maxProfit;
}

console.log(solution(input));
