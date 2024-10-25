class Solution {
    TreeNode tn;
    public TreeNode increasingBST(TreeNode root) {
        TreeNode nn = new TreeNode();
        tn = nn;
        dfs(root);
        return nn.right;
    }

    public void dfs(TreeNode node) {
        if(node == null) {
            return;
        }

        dfs(node.left);

        tn.right = new TreeNode(node.val);
        tn = tn.right;

        dfs(node.right);
    }

}

// dfs