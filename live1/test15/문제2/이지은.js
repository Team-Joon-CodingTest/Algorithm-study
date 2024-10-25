const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  arr = input.slice(1);
  stack = [];
  answer = [];

  for (x of arr) {
    if (x === '2') {
      if (stack.length === 0) {
        answer.push(-1);
      } else {
        newArr = stack.pop();
        answer.push(newArr);
      }
    } else if (x === '3') {
      answer.push(stack.length);
    } else if (x === '4') {
      if (stack.length === 0) {
        answer.push(1);
      } else answer.push(0);
    } else if (x === '5') {
      if (stack.length === 0) {
        answer.push(-1);
      } else answer.push(stack[stack.length - 1]);
    } else {
      stack.push(x.substr(2));
    }
  }
  return answer.join('\n');
}

console.log(solution(input));
