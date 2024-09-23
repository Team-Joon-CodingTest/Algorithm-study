/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return isMirror(root.left, root.right);
};

const isMirror = (leftNode, rightNode) => {
  // 두 노드가 모두 null
  if (leftNode == null && rightNode == null) return true;
  // 두 노드 중 하나가 null
  if (leftNode == null || rightNode == null) return false;
  // 두 노드 값이 다름
  if (leftNode.val !== rightNode.val) return false;

  // 재귀적으로 확인
  return (
    isMirror(leftNode.left, rightNode.right) &&
    isMirror(leftNode.right, rightNode.left)
  );
};
