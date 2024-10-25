const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const X = input[0][0];
  const result = [];
  const iNum = String(X).split('').map(Number);

  function backtrack(numbers, m = []) {
    if (numbers.length === 0) {
      result.push(Number(m.join('')));
    } else {
      for (let i = 0; i < numbers.length; i++) {
        const current = numbers.slice();
        const next = current.splice(i, 1);
        backtrack(current, m.concat(next));
      }
    }
  }

  backtrack(iNum);

  const filterResult = result.filter((num) => num > X);

  return filterResult.length === 0 ? 0 : Math.min(...filterResult);
}

console.log(solution(input));
