const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const numberArray = [1, 5, 10, 50];
  const result = new Set();

  function backtrack(start, total, count) {
    if (count === N) {
      result.add(total);
      return;
    }

    for (let i = start; i < numberArray.length; i++) {
      backtrack(i, total + numberArray[i], count + 1);
    }
  }

  backtrack(0, 0, 0);
  return result.size;
}

console.log(solution(input));
