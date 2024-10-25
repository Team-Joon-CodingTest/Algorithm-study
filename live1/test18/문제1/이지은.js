const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);
  let answer = [];
  for (let i = 0; i < N - K + 1; i++) {
    let n = 0;
    for (let j = i; j < i + K; j++) {
      n += arr[j];
    }
    answer.push(n);
  }
  return (answer = Math.max(...answer));
}

console.log(solution(input));
