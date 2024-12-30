const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, K] = input[0];
  const dailyTemperature = input[1];

  let max = -Infinity;

  for (let i = 0; i <= N - K; i++) {
    let storage = 0;
    for (let j = i; j < i + K; j++) {
      storage += dailyTemperature[j];
    }

    if (storage > max) max = storage;
  }
  return max;
}

console.log(solution(input));
