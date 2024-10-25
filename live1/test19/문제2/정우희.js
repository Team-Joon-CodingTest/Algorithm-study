const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  const digits = input.split('').map(Number);

  if (!digits.includes(0)) {
    console.log(-1);
    return;
  }

  const sum = digits.reduce((acc, curr) => acc + curr, 0);
  if (sum % 3 !== 0) {
    console.log(-1);
    return;
  }

  digits.sort((a, b) => b - a);

  console.log(digits.join(''));
}

solution(input);
