const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((a) => a.split(' ').map(Number));

function solution(input) {
  const N = Number(input[0]);
  const info = input.slice(1).map(([Ti, Pi]) => ({ Ti, Pi }));

  let arr = Array(N + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const { Ti, Pi } = info[i];

    arr[i + 1] = Math.max(arr[i + 1], arr[i]);

    if (i + Ti <= N) {
      arr[i + Ti] = Math.max(arr[i + Ti], arr[i] + Pi);
    }
  }

  return arr[N];
}

console.log(solution(input));
