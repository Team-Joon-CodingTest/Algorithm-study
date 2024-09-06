const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const level = input[1];
  const Q = input[2][0];
  const boundary = input.slice(3);
  const result = [];

  const prefixArr = Array.from({ length: N }).fill(0);

  for (let i = 0; i < N; i++) {
    if (i === 0) {
      prefixArr[i] = 0;
    } else {
      prefixArr[i] = prefixArr[i - 1];
      if (level[i - 1] > level[i]) {
        prefixArr[i]++;
      }
    }
  }

  for (let i = 0; i < Q; i++) {
    const [x, y] = boundary[i];
    const a = x - 1;
    const b = y - 1;

    result.push(prefixArr[b] - prefixArr[a]);
  }

  return result.join('\n');
}

console.log(solution(input));
