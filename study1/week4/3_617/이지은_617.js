function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var mergeTrees = function (root1, root2) {
  if (root1 === null && root2 === null) {
    return null;
  }

  if (root1 === null) {
    return root2;
  }

  if (root2 === null) {
    return root1;
  }

  // 두 노드가 모두 존재하는 경우 값을 합침
  const merged = new TreeNode(root1.val + root2.val);

  // 재귀적으로 왼쪽과 오른쪽 자식 노드를 병합
  merged.left = mergeTrees(root1.left, root2.left);
  merged.right = mergeTrees(root1.right, root2.right);

  return merged;
};
