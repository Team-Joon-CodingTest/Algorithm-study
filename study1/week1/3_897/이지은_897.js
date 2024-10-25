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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  // 새로운 루트 노드를 저장할 변수입니다.
  let newRoot = null;

  // 마지막으로 방문한 노드를 저장할 변수입니다.
  let lastVisitedNode = null;

  // 중위 순회를 수행하는 재귀 함수입니다.
  function inOrderTraversal(node) {
    if (!node) return;

    // 왼쪽 자식을 방문합니다.
    inOrderTraversal(node.left);

    // 왼쪽 링크를 끊습니다.
    node.left = null;

    if (lastVisitedNode) {
      // 마지막으로 방문한 노드의 오른쪽에 현재 노드를 연결합니다.
      lastVisitedNode.right = node;
    } else {
      // 새로운 루트 노드를 설정합니다.
      newRoot = node;
    }

    // 마지막으로 방문한 노드를 업데이트합니다.
    lastVisitedNode = node;

    // 오른쪽 자식을 방문합니다.
    inOrderTraversal(node.right);
  }

  // 중위 순회를 시작합니다.
  inOrderTraversal(root);

  // 변환된 연결 리스트의 새로운 루트 노드를 반환합니다.
  return newRoot;
};
