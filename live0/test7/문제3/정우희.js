const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const X = parseInt(input, 10);

function solution(X) {
  if (X % 2 === 0) {
    return 'SK';
  } else {
    return 'CY';
  }
}

console.log(solution(X));
