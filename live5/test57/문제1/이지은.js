const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const n = Number(input[0]);
  const commands = input.slice(1).map((el) => el.split(' ').map(Number)); // 명령 배열
  let stack = [];
  let answer = [];

  for (let i = 0; i < n; i++) {
    const command = commands[i][0];
    if (command === 1) {
      stack.push(commands[i][1]);
    } else if (command === 2) {
      if (stack.length > 0) {
        answer.push(stack.pop());
      } else {
        answer.push(-1);
      }
    } else if (command === 3) {
      answer.push(stack.length);
    } else if (command === 4) {
      answer.push(stack.length === 0 ? 1 : 0);
    } else if (command === 5) {
      if (stack.length > 0) {
        answer.push(stack[stack.length - 1]);
      } else {
        answer.push(-1);
      }
    }
  }

  return answer.join('\n');
}

console.log(solution(input));
