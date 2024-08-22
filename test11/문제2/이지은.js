const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

// console.log(input);

function solution(input) {
  let [N, K] = input[0].split(' ').map(Number);
  let taste = input[1].split(' ').map(Number);

  // 첫 윈도우 합
  let current = 0;
  for (let j = 0; j < K; j++) {
    current += taste[j];
  }

  let max = current;

  // 윈도우 계산
  for (let i = K; i < N; i++) {
    current += taste[i] - taste[i - K];
    max = Math.max(max, current);
  }

  // 연결되는 윈도우 계산
  for (let i = 0; i < K - 1; i++) {
    current += taste[i] - taste[N - K + i];
    max = Math.max(max, current);
  }

  return (answer = max);
}

console.log(solution(input));
