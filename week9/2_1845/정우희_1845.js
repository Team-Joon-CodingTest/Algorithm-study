function solution(nums) {
  const numCount = new Map();
  const maxCount = nums.length / 2;

  for (const num of nums) {
    if (numCount.has(num)) {
      numCount.set(num, numCount.get(num) + 1);
    } else {
      numCount.set(num, 1);
    }
  }

  const uniqueNums = Array.from(numCount.keys());
  const numVariety = uniqueNums.length;

  return numVariety > maxCount ? maxCount : numVariety;
}
