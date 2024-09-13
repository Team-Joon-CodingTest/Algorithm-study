const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const [E, S, M] = input;

  let e = 1,
    s = 1,
    m = 1;
  let year = 1;

  while (true) {
    if (e === E && s === S && m === M) {
      return year;
    }

    e += 1;
    s += 1;
    m += 1;
    year += 1;

    if (e > 15) e = 1;
    if (s > 28) s = 1;
    if (m > 19) m = 1;
  }
}

console.log(solution(input));
