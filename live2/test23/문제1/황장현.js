const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input;
  const [top, under] = [M - 1, N - 1];
  let topMulti = 1;
  let underMulit = 1;
  for (let i = 0; i < under; i++) {
    topMulti *= top - i;
    underMulit *= under - i;
  }
  return topMulti / underMulit;
}

console.log(solution(input));
