const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const map = input.slice(1);
  let count = 0;

  function 재귀(sum, prevPlace, day) {
    if (day === N) {
      if (sum >= M) count++;
      return;
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        let temp = sum;
        if (j === prevPlace) {
          temp += map[i][j] / 2;
        } else {
          temp += map[i][j];
        }
        재귀(temp, j, day + 1);
      }
    }
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      const sum = map[i][j];
      재귀(sum, j, 1);
    }
  }

  return count;
}

console.log(solution(input));
