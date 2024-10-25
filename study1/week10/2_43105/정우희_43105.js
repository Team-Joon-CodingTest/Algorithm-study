function solution(triangle) {
  // 삼각형의 높이
  const height = triangle.length;

  // 각 위치에서의 최대 합을 저장할 배열
  const dp = Array.from({ length: height }, () => Array(height).fill(0));

  // 초기값 설정
  dp[0][0] = triangle[0][0];

  // 다이나믹 프로그래밍을 통해 최대 합 계산
  for (let i = 1; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      // 맨 왼쪽 열일 경우
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      }
      // 맨 오른쪽 열일 경우
      else if (j === i) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      }
      // 그 외의 경우
      else {
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }

  // 최대 합 찾기
  let maxSum = 0;
  for (let i = 0; i < height; i++) {
    maxSum = Math.max(maxSum, dp[height - 1][i]);
  }

  return maxSum;
}
