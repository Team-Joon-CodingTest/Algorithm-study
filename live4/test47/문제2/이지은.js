const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((n) => n.split(' ').map(Number));

function solution(input) {
  const [T] = input[0];
  const Tarr = input.slice(1);

  Tarr.forEach((arr) => {
    let [N, M] = arr;
    if (N === M) {
      console.log(1);
    } else {
      let sumi = 1n;
      let Npac = 1n;

      for (let i = M; i > M - N; i--) {
        sumi *= BigInt(i);
      }
      for (let j = 1; j <= N; j++) {
        Npac *= BigInt(j);
      }

      console.log(Number(sumi / Npac));
    }
  });
}

solution(input);
