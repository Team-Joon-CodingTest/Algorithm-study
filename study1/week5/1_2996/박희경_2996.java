class Solution {
    public int missingInteger(int[] nums) {
        int idx = nums.length;
        int sequentialSum = 0;  // 연속된 접두사의 합

        for (int i = 0; i < idx; i++) {
            if (i == 0 || nums[i] == nums[i - 1] + 1) {
                sequentialSum += nums[i]; // 연속된 접두사의 합
            } else break;
        }

        Arrays.sort(nums);
        for (int num : nums) {
            // 중복된 값은 건너뜀
            if (num == sequentialSum) {
                sequentialSum++;
            }
        }
        return sequentialSum;
    }
}