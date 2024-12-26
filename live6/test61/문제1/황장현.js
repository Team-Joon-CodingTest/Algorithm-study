const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const T = Number(input.shift());
  const result = [];
  for (let i = 0; i < T; i++) {
    const [N, M] = input.shift();
    const flightTypes = input.splice(0, M);
    result.push(N - 1);
  }
  return result.join('\n');
}

console.log(solution(input));
