const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const iceBuckets = new Array(1000001).fill(0);

  for (let i = 1; i <= N; i++) {
    const [gi, xi] = input[i].split(' ').map(Number);
    iceBuckets[xi] += gi;
  }

  let windowSum = 0;
  let maxIce = 0;
  const windowSize = 2 * K + 1;

  for (let i = 0; i <= Math.min(1000000, K); i++) {
    windowSum += iceBuckets[i];
  }

  maxIce = windowSum;

  for (let i = K + 1; i <= 1000000; i++) {
    windowSum +=
      iceBuckets[i] - (i - windowSize >= 0 ? iceBuckets[i - windowSize] : 0);
    maxIce = Math.max(maxIce, windowSum);
  }

  console.log(maxIce);
}

solution(input);
