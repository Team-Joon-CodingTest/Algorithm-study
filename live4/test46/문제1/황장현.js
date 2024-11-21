const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  const X = Number(input);

  let stick = 64;
  let total = 0;
  let count = 0;

  if (X === stick) {
    return 1;
  }
  while (X > total) {
    stick /= 2;
    if (total + stick <= X) {
      total += stick;
      count++;
    }
  }
  return count;
}

console.log(solution(input));
