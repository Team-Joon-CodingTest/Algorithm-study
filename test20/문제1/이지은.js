const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let [N, K] = input[0].split(' ').map(Number);
  const arr = input.splice(1).map(Number).reverse();

  let answer = 0;
  for (let i = 0; i < N; i++) {
    if (K === 0) break;

    if (K - arr[i] >= 0) {
      while (K - arr[i] >= 0) {
        K -= arr[i];
        answer++;
        i = 0;
      }
    }
  }
  return answer;
}

console.log(solution(input));
