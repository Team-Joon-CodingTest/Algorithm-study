// MIN(중복을 제거한 배열의 길이, N/2)
// 1. 배열을 해시로 바꿈
// 2. 해시로 중복제거
function solution(nums) {
  var answer = 0;
  const N = nums.length;

  const set = new Set(nums);
  const uniqueArr = [...set];

  answer = Math.min(uniqueArr.length, N / 2);

  return answer;
}
