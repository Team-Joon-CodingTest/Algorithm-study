class Solution {
    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> result = new LinkedList();
        bfs(root, result);
        return result;
    }

    private void bfs(TreeNode node, List<Double> list) {
        Queue<TreeNode> q = new LinkedList();
        q.offer(node);

        double sum = 0;
        while(!q.isEmpty()) {
            double count = q.size();
            for(int i = 0; i < count; i++) {
                TreeNode n = q.poll();

                if(n.left != null) q.offer(n.left);
                if(n.right != null ) q.offer(n.right);
                sum += n.val;
            }
            list.add(sum / count);
            sum = 0;
        }
    }
}

// bfs, val의 범위 잘 파악하