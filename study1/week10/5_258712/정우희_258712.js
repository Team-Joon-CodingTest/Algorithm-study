// 런타임 해결 못함
function solution(friends, gifts) {
  const giftCount = {}; // 선물 주고받은 횟수를 저장할 객체

  // 친구들 간 선물 주고받은 횟수를 계산합니다.
  for (const friend of friends) {
    giftCount[friend] = { given: 0, received: 0 };
  }

  for (const gift of gifts) {
    const [giver, receiver] = gift.split(' ');
    giftCount[giver].given++;
    giftCount[receiver].received++;
  }

  // 선물 지수를 계산하고, 가장 많은 선물을 받을 친구를 찾습니다.
  let maxGifts = 0;
  let maxGiftReceiver = '';

  for (const friend of friends) {
    const giftIndex = giftCount[friend].received - giftCount[friend].given;
    if (
      giftIndex > maxGifts ||
      (giftIndex === maxGifts && friend < maxGiftReceiver)
    ) {
      maxGifts = giftIndex;
      maxGiftReceiver = friend;
    }
  }

  // 다음 달에 받을 선물의 수를 반환합니다.
  return Math.max(maxGifts, 0);
}
