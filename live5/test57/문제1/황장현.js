const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const stack = [];
  const result = [];

  for (let i = 1; i <= N; i++) {
    const isOverZero = stack.length > 0;
    const order = input[i][0];

    if (order === 1) {
      stack.push(input[i][1]);
    }
    if (order === 2) {
      if (isOverZero) {
        result.push(stack.pop());
      } else {
        result.push(-1);
      }
    }
    if (order === 3) {
      result.push(stack.length);
    }
    if (order === 4) {
      if (isOverZero) result.push(0);
      else result.push(1);
    }
    if (order === 5) {
      if (isOverZero) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push(-1);
      }
    }
  }
  return result.join('\n');
}

console.log(solution(input));
