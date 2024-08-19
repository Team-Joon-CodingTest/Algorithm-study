const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const wages = input[1].split(" ").map(Number);

  if (m === 0) {
    return 0;
  }

  let currentSum = 0;
  for (let i = 0; i < m; i++) {
    currentSum += wages[i];
  }

  let maxSum = currentSum;

  for (let i = m; i < n; i++) {
    currentSum = currentSum - wages[i - m] + wages[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(solution(input));
