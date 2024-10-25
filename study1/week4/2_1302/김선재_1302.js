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
var deepestLeavesSum = function (root) {
  // depth 구하기
  function maxDepth(root) {
    // root가 없으면 멈춤
    if (root == null) return 0;

    // 왼쪽과 오른쪽을 재귀적으로 순회하여 횟수를 더해줌
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }

  const depth = maxDepth(root);
  const sumDepth = Array(depth).fill(0); // 각 depth의 누적 합을 저장할 배열

  // 트리 순회
  function traverse(node, depth) {
    if (node === null) {
      return;
    }

    sumDepth[depth] += node.val; // 현재 노드의 값을 해당 깊이 배열에 저장
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }

  traverse(root, 0);

  // 가장 깊은 레벨의 노드 값들의 합 반환
  return sumDepth[depth - 1];
};
