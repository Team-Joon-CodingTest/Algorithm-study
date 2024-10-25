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
  let prev = null; // 이전 노드를 저장할 변수
  let minDiff = Infinity; // 최소 차이를 저장할 변수, 초기값은 가장 큰 수로 설정

  function inorder(node) {
    if (node === null) {
      return;
    }

    // 중위 순회: 왼쪽 자식 -> 노드 -> 오른쪽 자식
    inorder(node.left);

    // 이전 노드가 존재하면 현재 노드와 이전 노드의 차이를 계산하고, 최소 차이를 업데이트
    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev.val);
    }
    prev = node; // 이전 노드 업데이트

    inorder(node.right);
  }

  inorder(root); // 중위 순회를 시작
  return minDiff; // 계산된 최소 차이를 반환
};
