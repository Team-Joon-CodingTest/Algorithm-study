var missingInteger = function (nums) {
  // 최장 연속 접두어의 합을 찾기 위한 변수
  let sum = nums[0];

  // 배열을 순회하며 최장 연속 접두어 찾기
  for (let i = 1; i < nums.length; i++) {
    // 연속적이지 않으면 중단
    if (nums[i] !== nums[i - 1] + 1) break;
    sum += nums[i];
  }

  // 누락된 최소 정수 찾기
  let missing = sum;
  while (nums.includes(missing)) {
    missing++;
  }

  return missing;
};
