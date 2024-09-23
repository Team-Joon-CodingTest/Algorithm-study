/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
  // 1. n을 나누었을때 나머지가 0인 x선택(=n의 약수)
  // 2. n을 n-x로 초기화
  // 3. 해당 턴의 플레이어가 못움직인다면 패배
  return n % 2 == 0;
};
