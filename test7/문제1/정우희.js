const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const X = parseInt(input, 10);

function solution(X) {
  let total = 64;
  let stickCount = 1;
  let shortestStick = 64;

  while (total > X) {
    shortestStick /= 2;

    if (total - shortestStick >= X) {
      total -= shortestStick;
    } else {
      stickCount++;
    }
  }

  return stickCount;
}

console.log(solution(X));
