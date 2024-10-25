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
var sumOfLeftLeaves = function (root) {
  // 트리 순회
  function traverse(node, isleft = false) {
    // leaf 노드가 아닌 경우
    if (node === null) {
      return 0;
    }

    // 왼쪽 leaf 노드인 경우
    if (!node.left && !node.right) {
      return isleft ? node.val : 0;
    }

    // 왼쪽과 오른쪽 서브트리의 결과값을 더해줌
    return traverse(node.left, true) + traverse(node.right, false);
  }

  return traverse(root);
};
