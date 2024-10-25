/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let arr1 = [];
  let arr2 = [];

  function traversal(node, arr) {
    // 리프노드를 arr에 추가
    if (!node.right && !node.left) arr.push(node.val);

    // 재귀적으로 순회하며 리프노드를 찾음
    node.right && traversal(node.right, arr);
    node.left && traversal(node.left, arr);
  }

  // 이진트리 1을 순회
  traversal(root1, arr1);

  // 이진트리 2를 순회
  traversal(root2, arr2);

  // 리프 배열 값을 비교
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};
