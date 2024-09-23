class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        int N = nums.length - 1;
        TreeNode node = dfs(nums, 0, N);
        return node;
    }

    private TreeNode dfs(int nums[], int i, int j) {
        if(i > j)
            return null;
        int index = (i + j) / 2;

        TreeNode n = new TreeNode(nums[index]);

        n.left = dfs(nums, i, index - 1);
        n.right = dfs(nums, index + 1, j);
        return n;
    }
}