const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const a = input[1];

  // dp 테이블 초기화
  const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  // 시작 상태: 위치 0에서 크기 1, 시간 0
  dp[0][0] = 1;

  // DP를 이용해 눈덩이 크기 계산
  for (let t = 0; t < M; t++) {
    for (let i = 0; i <= N; i++) {
      if (dp[i][t] === 0) continue;

      // 1칸 굴리기
      if (i + 1 <= N) {
        dp[i + 1][t + 1] = Math.max(dp[i + 1][t + 1], dp[i][t] + a[i]);
      }

      // 2칸 던지기
      if (i + 2 <= N) {
        dp[i + 2][t + 1] = Math.max(
          dp[i + 2][t + 1],
          Math.floor(dp[i][t] / 2) + a[i + 1]
        );
      }
    }
  }

  // 최대 크기 찾기
  let maxSize = 0;
  for (let i = 0; i <= N; i++) {
    for (let t = 0; t <= M; t++) {
      maxSize = Math.max(maxSize, dp[i][t]);
    }
  }

  console.log(maxSize);
}

solution(input);
