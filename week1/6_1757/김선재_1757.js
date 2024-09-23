/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // 배열이 비어있다면 빈 배열을 리턴
  if (!nums.length) {
    return [];
  }

  let result = [];
  let start = nums[0];
  let end = nums[0];

  // 시작점과 끝점을 기록하며 반복
  // 다음요소와 현재 요소가 끊어졌을때 결과값을 기록
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      end = nums[i];
    } else {
      result.push(formatRange(start, end));
      start = end = nums[i];
    }
  }

  result.push(formatRange(start, end));

  return result;
};

// 출력 형식에 맞춰 함수 선언
function formatRange(start, end) {
  return start === end ? `${start}` : `${start}->${end}`;
}
