class Solution {
    public int missingInteger(int[] nums) {
        int countSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            // 연속된 순열인지 확인한 후 합을 구함
            if (nums[i - 1] + 1 == nums[i]) countSum += nums[i];
            else break;
        }
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            if (countSum == nums[i]) {
                countSum++;
            }
        }
        return countSum;
    }
}
