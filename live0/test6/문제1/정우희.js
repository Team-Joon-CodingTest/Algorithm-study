const fs = require('fs');
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solution(n) {
  if (n > 2 && n < 100000) {
    const numbers = [];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
      if (n % i === 0) {
        numbers.push(i);
      }
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    if (sum === n) {
      console.log(`${n} = ${numbers.join(' + ')}`);
    } else {
      console.log(`${n} is NOT perfect.`);
    }
  }
}

for (let i = 0; i < input.length; i++) {
  const n = parseInt(input[i], 10);
  if (n === -1) {
    break;
  }
  solution(n);
}
