const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, S] = input[0];
  const numbers = input[1];
  let count = 0;

  function dfs(index, sum, picked) {
    if (index === N) {
      if (sum === S && picked > 0) count++;
      return;
    }

    dfs(index + 1, sum + numbers[index], picked + 1);

    dfs(index + 1, sum, picked);
  }

  dfs(0, 0, 0);
  console.log(count);
}

console.log(solution(input));
