const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const orderNum = input.shift();
  const stack = [];
  const result = [];
  for (let i = 0; i < orderNum; i++) {
    const order = input[i][0];
    if (order === 1) {
      stack.push(input[i][1]);
    }
    if (order === 2) {
      if (stack.length > 0) {
        result.push(stack.pop());
      } else {
        result.push(-1);
      }
    }
    if (order === 3) {
      result.push(stack.length);
    }
    if (order === 4) {
      if (stack.length > 0) {
        result.push(0);
      } else result.push(1);
    }
    if (order === 5) {
      if (stack.length > 0) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push(-1);
      }
    }
  }
  return result.join('\n');
}

console.log(solution(input));
