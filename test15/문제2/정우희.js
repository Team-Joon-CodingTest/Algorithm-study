const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const commands = input.slice(1);
const stack = [];
let result = [];

for (let i = 0; i < N; i++) {
  const command = commands[i].split(' ');

  if (command[0] === '1') {
    stack.push(parseInt(command[1], 10));
  } else if (command[0] === '2') {
    if (stack.length > 0) {
      result.push(stack.pop());
    } else {
      result.push(-1);
    }
  } else if (command[0] === '3') {
    result.push(stack.length);
  } else if (command[0] === '4') {
    result.push(stack.length === 0 ? 1 : 0);
  } else if (command[0] === '5') {
    if (stack.length > 0) {
      result.push(stack[stack.length - 1]);
    } else {
      result.push(-1);
    }
  }
}

console.log(result.join('\n'));
