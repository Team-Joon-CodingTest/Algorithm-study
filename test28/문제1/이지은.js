const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const result = new Set();
  let temp = '';

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(x, y, str) {
    if (str.length === 6) {
      result.add(str);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
        dfs(newX, newY, str + input[newX][newY]);
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      dfs(i, j, input[i][j].toString()); 
    }
  }

  return result.size;
}

console.log(solution(input));
