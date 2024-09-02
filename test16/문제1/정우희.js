const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const N = parseInt(input[0], 10);
  let goodWordCount = 0;

  for (let i = 1; i <= N; i++) {
    const word = input[i];
    const stack = [];

    for (let alphabet of word) {
      if (stack.length > 0 && stack[stack.length - 1] === alphabet) {
        stack.pop();
      } else {
        stack.push(alphabet);
      }
    }

    if (stack.length === 0) {
      goodWordCount++;
    }
  }

  console.log(goodWordCount);
}

solution(input);
