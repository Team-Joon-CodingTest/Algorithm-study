/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  //중복 제거
  const uniqueArray = [...new Set(candyType)];

  let ans = Math.min(uniqueArray.length, candyType.length / 2);
  return ans;
};
