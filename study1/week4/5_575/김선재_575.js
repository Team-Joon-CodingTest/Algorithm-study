/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const set = new Set();

  // candy set을 순회하며 중복을 제거하여 추가
  for (let i = 0; i < candyType.length; i++) {
    set.add(candyType[i]);
  }

  // 둘 중 적은 값을 리턴
  return Math.min(set.size, candyType.length / 2);
};
