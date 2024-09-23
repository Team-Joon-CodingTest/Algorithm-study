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
var minDiffInBST = function (root) {
  let minDiff = Infinity;
  let prev = null;

  inOrderTraversal(root);
  return minDiff;

  // 중위 순회
  function inOrderTraversal(node) {
    if (node === null) return;

    // 왼쪽 서브트리 순회
    inOrderTraversal(node.left);

    // 이전 노드와의 차이
    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }
    prev = node.val;

    // 오른쪽 서브트리 순회
    inOrderTraversal(node.right);
  }
};
