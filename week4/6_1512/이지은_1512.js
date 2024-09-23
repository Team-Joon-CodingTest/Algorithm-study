/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const countMap = {}; // 해시 테이블 생성

  // 각 숫자의 등장 횟수 계산
  for (let num of nums) {
    if (countMap[num]) {
      countMap[num] += 1;
    } else {
      countMap[num] = 1;
    }
  }

  let goodPairs = 0; // 좋은 쌍의 개수를 저장하는 변수

  // 각 숫자에 대해 좋은 쌍의 개수를 계산
  for (let count of Object.values(countMap)) {
    goodPairs += (count * (count - 1)) / 2;
  }

  return goodPairs;
};
