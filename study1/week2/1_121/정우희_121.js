var maxProfit = function (prices) {
  // price[i] = i번째날 price

  if (!prices || prices.length === 0) {
    // 입력값이 유효한 지 확인
    return 0;
  }

  let minPrice = prices[0]; // 첫번째 배열 초기화, 최소 구매가격 추적
  let maxProfit = 0; // 0으로 초기화, 최대 이익 추적

  for (let price of prices) {
    if (price < minPrice) {
      // 현재 가격이 minPrice보다 작으면, minPrice를 현재 가격으로 업데이트
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      // 현재 가격에서 minPrice를 뺀 값이 maxProfit보다 크면, maxProfit을 뺀 값으로 업데이트
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
};
