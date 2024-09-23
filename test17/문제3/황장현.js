const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input.shift()[0];
  const nNums = input.shift();
  const M = input.shift()[0];
  const cSums = Array.from({ length: N }).fill(0);
  const result = [];
  for (let i = 0; i < N; i++) {
    let nojukNum = 0;
    if (i > 0 && !isNaN(cSums[i - 1])) {
      nojukNum = cSums[i - 1];
    }
    cSums[i] = nojukNum + nNums[i];
  }
  for (let i = 0; i < M; i++) {
    const [start, end] = input[i];

    result.push(cSums[end - 1] - (cSums[start - 2] || 0));
  }

  return result.join('\n');
}

console.log(solution(input));
