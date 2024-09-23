var summaryRanges = function (nums) {
  if (nums.length === 0) return []; // 빈 배열인 경우, 빈 범위 목록 반환

  let ranges = [];
  let start = nums[0]; // 처음 숫자를 시작점으로 설정

  for (let i = 0; i < nums.length; i++) {
    // 연속되지 않는 숫자를 찾거나 배열의 끝에 도달했을 때
    if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
      if (start === nums[i]) {
        ranges.push(`${start}`); // 단일 숫자 범위
      } else {
        ranges.push(`${start}->${nums[i]}`); // 연속된 숫자 범위
      }
      start = nums[i + 1]; // 새로운 범위의 시작점 설정
    }
  }

  return ranges;
};
