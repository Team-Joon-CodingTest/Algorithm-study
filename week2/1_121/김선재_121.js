/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 초기값 설정
  let minPrice = prices[0];
  let maxProfit = 0;

  // 배열을 순회 -> O(N)
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]); // 현재까지의 최소 가격 갱신
    maxProfit = Math.max(maxProfit, prices[i] - minPrice); // 최대 이익 갱신
  }

  return maxProfit;
};
