class Solution {
    int deepLevel = 0;
    int sum = 0;
    public int deepestLeavesSum(TreeNode root) {
        dfs(root, 0);

        return sum;
    }
    void dfs(TreeNode root, int level) {
        if (root == null) return;

        if (root.left == null && root.right == null) {
            if (level > deepLevel) {    // 더 깊은 경우(갱신)
                deepLevel = level;
                sum = root.val; // 더 깊은 레벨을 찾았으므로 sum을 현재 노드 값으로 초기화
            }
            else if (level == deepLevel) {
                sum += root.val;
            }
        }

        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }
}