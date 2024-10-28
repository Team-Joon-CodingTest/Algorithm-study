const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  const n = Number(input);
  let count = 0;

  for (let i = Math.floor(n / 5); i >= 0; i--) {
    const remainingWeight = n - i * 5;

    if (remainingWeight % 3 === 0) {
      count = i + remainingWeight / 3;
      console.log(count);
      return;
    }
  }

  console.log(-1);
}

solution(input);
