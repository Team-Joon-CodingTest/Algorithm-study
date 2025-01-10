const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const [e, s, m] = input;

  let year = e;

  while (year <= 7980) {
    if (year % 28 === s && year % 19 === m) {
      break;
    } else {
      year += 15;
    }
  }
  return year
  
}

console.log(solution(input));
