https://leetcode.com/problems/binary-tree-level-order-traversal/description/

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        if(root == null) return new LinkedList();
        return bfs(root);
    }

    private List<List<Integer>> bfs(TreeNode node) {
        Queue<TreeNode> q = new LinkedList();
        List<List<Integer>> list = new LinkedList();
        List<Integer> tempList = new LinkedList();

        q.offer(node);

        while(!q.isEmpty()) {
            tempList = new LinkedList();
            int N = q.size();
            for(int i = 0; i < N; i++) {
                TreeNode n = q.poll();
                tempList.add(n.val);
                if(n.left != null) q.offer(n.left);
                if(n.right != null) q.offer(n.right);
            }
            list.add(tempList);
        }

        return list;
    }
}