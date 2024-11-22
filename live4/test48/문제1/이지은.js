const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  let sum = 0;
  let answer = [];

  if (input === '0') {
    console.log(0);
    return;
  }

  for (let i = input.length - 1; i >= 0; i -= 3) {
    sum = 0;

    for (let j = i; i - 3 < j; j--) {
      if (j < 0) continue;
      else if (input[j] === '1' && i === j) {
        sum += 1;
      } else if (input[j] === '1' && i - 1 === j) {
        sum += 2;
      } else if (input[j] === '1' && i - 2 === j) {
        sum += 4;
      }
    }

    answer.push(sum);
  }
  console.log(answer.reverse().join(''));
}

solution(input);
