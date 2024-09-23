var numIdenticalPairs = function (nums) {
  let goodPairs = 0; // '좋은 쌍'의 수를 세는 변수

  // 모든 가능한 쌍을 확인하기 위한 중첩 루프
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // nums[i] == nums[j] 이고 i < j 조건을 만족하면 '좋은 쌍'
      if (nums[i] == nums[j]) {
        goodPairs++; // '좋은 쌍'의 수 증가
      }
    }
  }

  return goodPairs; // 계산된 '좋은 쌍'의 수 반환
};
