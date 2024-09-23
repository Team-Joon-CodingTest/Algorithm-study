class Solution {
    TreeNode prev;
    public TreeNode increasingBST(TreeNode root) {
        TreeNode n = new TreeNode();
        prev = n;
        dfs(root);
        return n.right;
    }

    public void dfs (TreeNode node) {
        if(node == null) {
            return;
        }
        dfs(node.left);
        prev.right = node; // 이전 노드의 오른쪽
        node.left = null;
        prev = node;
        dfs(node.right);
    }
}

