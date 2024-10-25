const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, S] = input[0].split(' ').map(Number);
const sequence = input[1].split(' ').map(Number);

let count = 0;

function findSubsequences(index, currentSum) {
  if (index === N) {
    if (currentSum === S) {
      count++;
    }
    return;
  }

  findSubsequences(index + 1, currentSum);

  findSubsequences(index + 1, currentSum + sequence[index]);
}

findSubsequences(0, 0);

if (S === 0) count--;

console.log(count);
