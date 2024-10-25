class Solution {
    int sum = 0;
    public int deepestLeavesSum(TreeNode root) {
        bfs(root);
        return sum;
    }

    private void bfs(TreeNode node) {
        Queue<TreeNode> q = new LinkedList();
        q.offer(node);

        while(!q.isEmpty()) {
            int N = q.size();
            sum = 0;
            for(int i = 0; i < N; i++) {
                TreeNode n = q.poll();
                if(n.left != null) q.offer(n.left);
                if(n.right != null) q.offer(n.right);
                sum += n.val;
            }
        }
    }
}