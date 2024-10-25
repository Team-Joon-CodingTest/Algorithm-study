/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  //set를 통해서 중복 제거 후 사탕의 종류를 알아냄
  const candyTypes = new Set(candyType);

  const candy = candyType.length / 2;

  return Math.min(candyTypes.size, candy);
};
