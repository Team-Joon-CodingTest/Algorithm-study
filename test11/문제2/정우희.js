const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [N, K] = input[0].split(" ").map(Number);
  const pies = input[1].split(" ").map(Number);

  const extendedPies = pies.concat(pies);

  let currentSum = 0;
  for (let i = 0; i < K; i++) {
    currentSum += extendedPies[i];
  }

  let maxSum = currentSum;

  for (let i = 1; i < N; i++) {
    currentSum = currentSum - extendedPies[i - 1] + extendedPies[i + K - 1];
    maxSum = Math.max(maxSum, currentSum);
  }

  console.log(maxSum);
}

solution(input);
