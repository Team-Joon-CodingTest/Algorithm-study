const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0], 10);

function solution(N) {
  const cards = [];
  const trash = [];

  for (let i = 1; i <= N; i++) {
    cards.push(i);
  }

  while (cards.length > 1) {
    trash.push(cards.shift());
    cards.push(cards.shift());
  }
  trash.push(cards.shift());

  console.log(trash.join(' '));
}
solution(N);
