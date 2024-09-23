class Solution {
    public int[] productExceptSelf(int[] nums) {
        int N = nums.length;

        int ans[] = new int[N];
        Arrays.fill(ans, 1);
        int curr = 1;
        for(int i = 0; i < N; i++) {
            ans[i] *= curr;
            curr *= nums[i];
        }
        curr = 1;
        for(int i = N - 1; i >= 0; i--) {
            ans[i] *= curr;
            curr *= nums[i];
        }
        return ans;
    }
}
