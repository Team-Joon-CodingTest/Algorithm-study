var maxDistance = function (colors) {
  // 최대 거리를 저장할 변수 초기화
  let maxDist = 0;
  // colors 배열의 길이
  const n = colors.length;

  // 외부 루프: 배열의 모든 요소에 대해
  for (let i = 0; i < n; i++) {
    // 내부 루프: 현재 요소 이후의 모든 요소에 대해
    for (let j = i + 1; j < n; j++) {
      // 서로 다른 색상의 집을 찾았을 때
      if (colors[i] !== colors[j]) {
        // 색상 사이 절대값을 구하고, 가장 큰 값을 구해 최대 거리 업데이트
        maxDist = Math.max(maxDist, Math.abs(i - j));
      }
    }
  }

  return maxDist;
};
