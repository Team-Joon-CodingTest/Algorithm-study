const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  let oneToN = [];
  let discardedCard = [];

  for (let i = 1; i <= parseInt(input); i++) {
    oneToN.push(i);
  }
  while (oneToN.length > 1) {
    discardedCard.push(oneToN.shift());
    oneToN.push(oneToN.shift());
  }
  discardedCard.push(oneToN[0]);
  return discardedCard.join(' ');
}

console.log(solution(input));
