const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const stack = [];
  const results = [];
  const commands = input.slice(1);

  commands.forEach((command) => {
    if (command.startsWith('push')) {
      const [, value] = command.split(' ');
      stack.push(Number(value));
    } else if (command === 'pop') {
      results.push(stack.length ? stack.pop() : -1);
    } else if (command === 'size') {
      results.push(stack.length);
    } else if (command === 'empty') {
      results.push(stack.length ? 0 : 1);
    } else if (command === 'top') {
      results.push(stack.length ? stack[stack.length - 1] : -1);
    }
  });

  console.log(results.join('\n'));
}

solution(input);
