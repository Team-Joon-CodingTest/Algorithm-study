const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const numbers = input[1].split(' ').map(Number);
  const queries = input.slice(2).map((line) => line.split(' ').map(Number));

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
