const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const [M, N] = input;
  const arr = Array(N + 1).fill(1);
  arr[0] = arr[1] = 0;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= N; j += i) {
        arr[j] = 0;
      }
    }
  }

  for (let i = M; i <= N; i++) {
    if (arr[i]) {
      console.log(i);
    }
  }
}

solution(input);
