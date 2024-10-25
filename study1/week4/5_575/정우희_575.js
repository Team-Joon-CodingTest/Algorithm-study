var distributeCandies = function (candyType) {
  // 새로운 Set을 만들어 중복을 제거하고 사탕 타입 수 계산
  const uniqueCandies = new Set(candyType);
  // 앨리스가 먹을 수 있는 사탕의 수 계산
  const eatableAmount = candyType.length / 2;
  // 먹을 수 있는 사탕의 수와 사탕 타입 수 중 더 작은 값 반환
  return Math.min(uniqueCandies.size, eatableAmount);
};
