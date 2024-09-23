class Solution {
    int min, prev;
    boolean init;

    void inorder(TreeNode root) {
        if (root == null) return;

        // left
        inorder(root.left);

        // self
        if (!init) {
            init = true;
        }
        else {
            min = Math.min(min, root.val - prev);
        }
        prev = root.val;

        // right
        inorder(root.right);
    }

    public int getMinimumDifference(TreeNode root) {
        init = false;
        min = Integer.MAX_VALUE;
        inorder(root);

        return min;
    }
}