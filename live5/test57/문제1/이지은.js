const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const n = Number(input[0]);
  const arr = input.slice(1).map((el) => el.split(' ').map(Number));
  let answer = [];
  let stack = [];

  for (let i = 0; i < n; i++) {
    console.log('숫자', arr[i][0]);

    if (arr[i][0] === 1) {
      stack.push(arr[i][1]);
    } else if (arr[i][0] === 2) {
      console.log(stack[0]);
      
      stack[0] ? answer.pop(stack.shift()) : answer.push(-1);
    } else if (arr[i][0] === 3) {
      answer.push(stack.length);
    } else if (arr[i][0] === 4) {
      stack[0] ? answer.push(0) : answer.push(1);
    } else {
      stack[0] ? answer.push(stack.pop()) : answer.push(-1);
    }
    console.log(answer);
  }
  return answer;
}

console.log(solution(input));

// let a = [1, 2, 3]
// console.log(a.pop());
