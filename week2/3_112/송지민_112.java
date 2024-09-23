https://leetcode.com/problems/path-sum/description/

class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        return dfs(root, targetSum, 0);
    }
    public boolean dfs(TreeNode node, int target, int sum) {
        // 종료 조건
        if(node == null) return false;
        if(node.left == null && node.right == null) {
            if(target == sum + node.val) return true;
            return false;
        }
        return dfs(node.left, target, sum + node.val) || dfs(node.right, target, sum + node.val);
    }
}