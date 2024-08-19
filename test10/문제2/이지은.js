const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(num) {
  let zero = 0;
  let one = 0;

  if (num[0] === '0') {
    zero++;
  } else {
    one++;
  }

  for (let i = 1; i < num.length; i++) {
    if (num[i] !== num[i - 1]) {
      if (num[i] === '0') {
        zero++;
      } else {
        one++;
      }
    }
  }
  return (answer = Math.min(zero, one));
}

console.log(solution(input));
