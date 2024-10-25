const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const arr = input.slice(1);
  let answer = 0;

  for (x of arr) {
    let stack = [];

    for (s of x) {
      if (stack.length === 0) {
        stack.push(s);
      } else if (stack[stack.length - 1] !== s) {
        stack.push(s);
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(input));
