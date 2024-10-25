const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

function solution(input) {
  const [N, K] = input[0];
  const arr = input.slice(1);

  // 얼음의 양을 좌표에 맞게 저장할 배열 (좌표 범위가 0 ~ 1000000)
  const iceBuckets = new Array(1000001).fill(0);

  // 각 좌표에 얼음 양을 저장
  for (let i = 0; i < N; i++) {
    const [gi, xi] = arr[i];
    iceBuckets[xi] += gi;
  }

  let currentSum = 0;
  let maxIce = 0;

  // 처음 윈도우의 얼음 합을 계산 (0부터 K까지 범위)
  for (let i = 0; i <= Math.min(1000000, K); i++) {
    currentSum += iceBuckets[i];
  }
  maxIce = currentSum;

  // 슬라이딩 윈도우 이동 (범위는 1부터 1000000까지)
  for (let i = 1; i <= 1000000; i++) {
    if (i - K - 1 >= 0) currentSum -= iceBuckets[i - K - 1];
    if (i + K <= 1000000) currentSum += iceBuckets[i + K];
    maxIce = Math.max(maxIce, currentSum);
  }

  return maxIce;
}

console.log(solution(input));
