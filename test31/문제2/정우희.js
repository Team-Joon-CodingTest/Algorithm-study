const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const cards = new Set(input[1].split(' ').map(Number));
const M = parseInt(input[2]);
const targets = input[3].split(' ').map(Number);

let result = [];

for (let i = 0; i < M; i++) {
  if (cards.has(targets[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join(' '));
