const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    const stack = [];
    const currentString = input[i];

    if (currentString === '.') {
      break;
    }

    let isValid = true;
    for (const char of currentString) {
      if (char === '(' || char === '[') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0 || stack[stack.length - 1] !== '(') {
          isValid = false;
          break;
        } else stack.pop();
      } else if (char === ']') {
        if (stack.length === 0 || stack[stack.length - 1] !== '[') {
          isValid = false;
          break;
        } else stack.pop();
      }
    }

    if (isValid && stack.length === 0) {
      result.push('yes');
    } else {
      result.push('no');
    }
  }
  return result.join('\n');
}

console.log(solution(input));
