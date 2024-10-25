const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  let zeroCount = 0;
  let oneCount = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] !== input[i - 1]) {
      if (input[i] === '0') zeroCount++;
      if (input[i] === '1') oneCount++;
    }
  }

  if (input[0] === '0') zeroCount++;
  else oneCount++;

  return Math.min(zeroCount, oneCount);
}

console.log(solution(input));
