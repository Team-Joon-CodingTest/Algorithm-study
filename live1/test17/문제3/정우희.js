const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const N = parseInt(input[0], 10);
  const numbers = input[1].split(' ').map(Number);
  const M = parseInt(input[2], 10);
  const queries = input.slice(3).map((line) => line.split(' ').map(Number));

  const prefixSum = new Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + numbers[i - 1];
  }

  const result = [];

  for (let [i, j] of queries) {
    result.push(prefixSum[j] - prefixSum[i - 1]);
  }

  console.log(result.join('\n'));
}

solution(input);
