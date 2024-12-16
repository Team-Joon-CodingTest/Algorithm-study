const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  let count = 0;
  const N = input[0][0];
  for (let i = 1; i <= N; i++) {
    const word = input[i][0];
    const stack = [];

    for (const alphabet of word) {
      if (stack.length > 0 && stack[stack.length - 1] === alphabet) {
        stack.pop();
      } else {
        stack.push(alphabet);
      }
    }

    if (stack.length === 0) {
      count++;
    }
  }
  return count;
}

console.log(solution(input));
