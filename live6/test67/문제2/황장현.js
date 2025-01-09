const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  let [N, K] = input[0];
  const Ai = input.slice(1);
  Ai.sort((a, b) => b - a);
  let count = 0;
  for (const coin of Ai) {
    count += Math.floor(K / coin);
    K %= coin;
  }
  return count;
}

console.log(solution(input));
