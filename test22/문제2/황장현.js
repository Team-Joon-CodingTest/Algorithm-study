const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const [E, S, M] = input;
  let result = 1;

  while (true) {
    if (
      (result - E) % 15 === 0 &&
      (result - S) % 28 === 0 &&
      (result - M) % 19 === 0
    ) {
      break;
    } else {
      result++;
    }
  }

  return result;
}

console.log(solution(input));
