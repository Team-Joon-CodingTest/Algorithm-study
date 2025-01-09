const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [E, S, M] = input[0];
  let year = 1;

  while (true) {
    if (
      (year - E) % 15 === 0 &&
      (year - S) % 28 === 0 &&
      (year - M) % 19 === 0
    ) {
      return year;
    }
    year++;
  }
}

console.log(solution(input));
