var longestCommonSubsequence = function (text1, text2) {
  // dp 배열 초기화
  const dp = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill(0)
  );

  // text1과 text2를 순회하며 dp 배열 채우기
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      // 문자가 같으면 대각선 위 값에 1을 더해 저장
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 문자가 다르면 왼쪽과 위쪽 값 중 더 큰 값 저장
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // 최종 결과 반환
  return dp[text1.length][text2.length];
};
