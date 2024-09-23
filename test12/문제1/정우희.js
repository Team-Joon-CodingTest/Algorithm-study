const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, X] = input[0].split(' ').map(Number);
  const visitors = input[1].split(' ').map(Number);

  let currentSum = 0;
  let maxSum = 0;
  let count = 0;

  for (let i = 0; i < X; i++) {
    currentSum += visitors[i];
  }

  maxSum = currentSum;
  count = 1;

  for (let i = X; i < N; i++) {
    currentSum = currentSum - visitors[i - X] + visitors[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      count = 1;
    } else if (currentSum === maxSum) {
      count++;
    }
  }

  if (maxSum === 0) {
    console.log('SAD');
  } else {
    console.log(maxSum);
    console.log(count);
  }
}

solution(input);
