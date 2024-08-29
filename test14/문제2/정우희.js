const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function isBalanced(line) {
  const stack = [];
  for (let char of line) {
    if (char === '(' || char === '[') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0 || stack.pop() !== '(') {
        return 'no';
      }
    } else if (char === ']') {
      if (stack.length === 0 || stack.pop() !== '[') {
        return 'no';
      }
    }
  }
  return stack.length === 0 ? 'yes' : 'no';
}

function solution(input) {
  for (let line of input) {
    if (line === '.') break;
    console.log(isBalanced(line));
  }
}

solution(input);
