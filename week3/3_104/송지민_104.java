class Solution {
    public int maxDepth(TreeNode root) {
        if(root == null) return 0;
        int result = bfs(root);
        return result;
    }

    private int bfs(TreeNode node) {
        Queue<TreeNode> q = new LinkedList();
        q.offer(node);
        int result = 0;
        while(!q.isEmpty()) {
            result++;
            int N = q.size();
            for(int i = 0; i < N; i++) {
                TreeNode n = q.poll();
                if(n.left != null) q.offer(n.left);
                if(n.right != null) q.offer(n.right);
            }

        }
        return result;
    }
}