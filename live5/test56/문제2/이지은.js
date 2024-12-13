const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  let answer = [];

  arr = Array(Number(input))
    .fill()
    .map((_, i) => i + 1);

  while (arr.length > 0) {
    if (arr.length !== 1) {
      answer.push(arr.shift());
      arr.push(arr.shift());
    } else {
      answer.push(arr[0]);
      return answer.join(' ');
    }
  }
}

console.log(solution(input));
