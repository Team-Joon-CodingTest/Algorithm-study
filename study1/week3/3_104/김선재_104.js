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
 * @return {number}
 */
var maxDepth = function (root) {
  // root 가 없으면 멈춤
  if (root == null) return 0;

  // 왼쪽과 오른쪽을 재귀적으로 순회하여 횟수를 더해줌
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
