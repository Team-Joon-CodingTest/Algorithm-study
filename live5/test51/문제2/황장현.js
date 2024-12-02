const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const T = Number(input[0][0]);
  const results = [];

  for (let i = 1; i <= T; i++) {
    const [K, W] = input[i];
    const k = Number(K);

    for (let i = 0; i <= W.length - k; i++) {
      const sliced = W.slice(i, i + k);
    }
  }
}

console.log(solution(input));
