const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const [M, N] = input;

  let arr = Array(N + 1).fill(1);
  arr[0] = arr[1] = 0;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= N; j += i) {
        arr[j] = 0;
      }
    }
  }

  let sum = 0;
  let min = Infinity;
  for (let i = M; i <= N; i++) {
    if (arr[i] === 1) {
      sum += i;
      if (min === Infinity) min = i;
    }
  }

  if (sum > 0) {
    console.log(sum);
    console.log(min);
  } else console.log(-1);
}

solution(input);
