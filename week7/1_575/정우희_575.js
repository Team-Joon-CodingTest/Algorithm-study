var distributeCandies = function (candyType) {
  const uniqueCandies = new Set(candyType); // 1단계: 유니크한 사탕의 종류 수 계산
  const eatableAmount = candyType.length / 2; // 앨리스가 먹을 수 있는 최대 사탕 수 (n / 2)
  return Math.min(uniqueCandies.size, eatableAmount); // 2단계: 유니크한 사탕의 수와 n / 2 중 더 작은 값 반환
};
