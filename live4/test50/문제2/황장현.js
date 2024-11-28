const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

function solution(input) {
  const S = input[0];
  let zeroCount = 0;
  let oneCount = 0;

  if (S[0] === '0') zeroCount++;
  else oneCount++;

  for (let i = 1; i < S.length; i++) {
    if (S[i] !== S[i - 1]) {
      if (S[i] === '0') zeroCount++;
      if (S[i] === '1') oneCount++;
    }
  }

  return Math.min(zeroCount, oneCount);
}

console.log(solution(input));
