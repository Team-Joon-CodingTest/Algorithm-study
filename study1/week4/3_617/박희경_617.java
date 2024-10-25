// 첫번째 시도한 방법
class Solution {
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) return null;
        else if (root1 == null) return root2;
        else if (root2 == null) return root1;

        Queue<TreeNode> q = new LinkedList<>();

        q.offer(root1);
        q.offer(root2);

        root1.val += root2.val; // root1 기준으로 root2 더하기

        while(!q.isEmpty()) {
            TreeNode node1 = q.poll();
            TreeNode node2 = q.poll();

            if (node1.left != null && node2.left != null) {
                q.offer(node1.left);
                q.offer(node2.left);

                node1.left.val += node2.left.val;
            }
            else if (node1.left == null) node1.left = node2.left;

            if (node1.right != null && node2.right != null) {
                q.offer(node1.right);
                q.offer(node2.right);

                node1.right.val += node2.right.val;
            }
            else if (node1.right == null) node1.right = node2.right;
        }
        return root1;
    }
}

// 단순하게 하면
class Solution {
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) return null;
        else if (root1 == null) return root2;
        else if (root2 == null) return root1;

        root1.val += root2.val;
        root1.left = mergeTrees(root1.left, root2.left);
        root1.right = mergeTrees(root1.right, root2.right);

        return root1;
    }
}