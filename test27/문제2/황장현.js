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

  function dfs(index, sum) {
    if (index === N) {
      if (sum === S) count++;
      return;
    }

    dfs(index + 1, sum);

    dfs(index + 1, sum + numbers[index]);
  }

  dfs(0, 0);

  if (S === 0) count--;

  return count;
}

console.log(solution(input));

// 참고
