const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const n = parseInt(input[0]);
  const commands = input.slice(1);
  const stack = [];
  const results = [];

  for (let i = 0; i < n; i++) {
    const command = commands[i];

    if (command.startsWith('push')) {
      const value = parseInt(command.split(' ')[1]);
      stack.push(value);
    } else if (command === 'pop') {
      if (stack.length === 0) {
        results.push(-1);
      } else {
        results.push(stack.pop());
      }
    } else if (command === 'size') {
      results.push(stack.length);
    } else if (command === 'empty') {
      if (stack.length === 0) {
        results.push(1);
      } else {
        results.push(0);
      }
    } else if (command === 'top') {
      if (stack.length === 0) {
        results.push(-1);
      } else {
        results.push(stack[stack.length - 1]);
      }
    } else if (command === 'top') {
      if (stack.length === 0) {
        results.push(-1);
      } else {
        results.push(stack[stack.length - 1]);
      }
    }
  }
  return results.join('\n');
}

console.log(solution(input));
