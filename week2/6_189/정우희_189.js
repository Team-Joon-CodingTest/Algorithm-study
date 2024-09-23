var rotate = function (nums, k) {
  k = k % nums.length; // 배열의 길이를 초과하는 회전은 반복되므로, 나머지 연산자를 사용하여 최소한의 회전만 수행

  // 전체 배열을 뒤집음
  reverse(nums, 0, nums.length - 1);
  // 처음부터 k-1까지의 부분을 뒤집음
  reverse(nums, 0, k - 1);
  // k부터 끝까지의 부분을 뒤집음
  reverse(nums, k, nums.length - 1);
};

var reverse = function (nums, start, end) {
  // 주어진 범위의 배열을 뒤집는 역할
  while (start < end) {
    // 두 요소의 값을 바꿈
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};
