const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const N = parseInt(input[0]);
  const expectedRanks = input.slice(1).map(Number);

  expectedRanks.sort((a, b) => a - b);

  let dissatisfactionSum = 0;

  for (let i = 0; i < N; i++) {
    const actualRank = i + 1;
    dissatisfactionSum += Math.abs(expectedRanks[i] - actualRank);
  }

  console.log(dissatisfactionSum);
}

solution(input);
