class Solution {
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        List<Integer> list1 = new LinkedList();
        List<Integer> list2 = new LinkedList();

        dfs(root1, list1);
        dfs(root2, list2);

        if(list1.size() == list2.size()) {
            for(int i = 0; i < list1.size(); i++) {
                if(list1.get(i) != list2.get(i)) return false;
            }
            return true;
        }
        return false;
    }

    private void dfs(TreeNode node, List<Integer> list) {
        if(node == null) return;
        if(node.left == null && node.right == null) {
            list.add(node.val);
            return;
        }

        if(node.left != null) dfs(node.left, list);
        if(node.right != null) dfs(node.right, list);

        return;
    }
}