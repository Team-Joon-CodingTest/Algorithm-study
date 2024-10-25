var tribonacci = function (n) {
  // 초기 Tribonacci 값
  let trib = [0, 1, 1];

  // n이 0, 1, 2 중 하나일 경우, 바로 해당 값을 반환
  if (n < 3) return trib[n];

  // Tn을 계산하기 위해 T3부터 Tn까지 반복
  for (let i = 3; i <= n; i++) {
    trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
  }

  // 계산된 Tn 값 반환
  return trib[n];
};
