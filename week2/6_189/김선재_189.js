/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 배열 길이를 초과하는 회전을 방지
  k = k % nums.length;

  function reverse(nums, start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      // 시작 인덱스와 끝 인덱스를 하나씩 좁혀줌
      start++;
      end--;
    }
  }

  reverse(nums, 0, nums.length - 1); // 1. 전체 reverse    -> [7,6,5,4,3,2,1]
  reverse(nums, 0, k - 1); // 2. 로테이션 숫자들 reverse -> [ 5,6,7,4,3,2,1 ]
  reverse(nums, k, nums.length - 1); // 3. 나머지 숫자들 reverse -> [ 5,6,7,1,2,3,4 ]
};
