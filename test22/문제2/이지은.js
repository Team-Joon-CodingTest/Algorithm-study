const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const [E, S, M] = input;

  let year = { E: 1, S: 1, M: 1 };
  let answer;

  for (let i = 1; i < Infinity; i++) {
    if (year['E'] === E && year['S'] === S && year['M'] === M) {
      answer = i;

      break;
    }
    year['E'] += 1;
    year['S'] += 1;
    year['M'] += 1;

    if (year['E'] === 16) {
      year['E'] = 1;
    }
    if (year['S'] === 29) {
      year['S'] = 1;
    }
    if (year['M'] === 20) {
      year['M'] = 1;
    }
  }
  return answer;
}

console.log(solution(input));
