const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const temperatures = input[1].split(' ').map(Number);

  let tempSum = 0;
  for (let i = 0; i < K; i++) {
    tempSum += temperatures[i];
  }

  let maxTempSum = tempSum;
  for (let i = K; i < N; i++) {
    tempSum += temperatures[i] - temperatures[i - K];
    maxTempSum = Math.max(maxTempSum, tempSum);
  }

  console.log(maxTempSum);
}
solution(input);
