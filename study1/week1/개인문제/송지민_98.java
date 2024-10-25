class Solution {
    public boolean isValidBST(TreeNode root) {
        return isValidBST(root, null, null);
    }

    public boolean isValidBST(TreeNode node, Integer min, Integer max) {
        // 종료 조건
        if (node == null) return true;

        if (min != null && node.val <= min) return false;
        if (max != null && node.val >= max) return false;

        if (!isValidBST(node.left, min, node.val)) return false;
        if (!isValidBST(node.right, node.val, max)) return false;

        return true;
    }
}