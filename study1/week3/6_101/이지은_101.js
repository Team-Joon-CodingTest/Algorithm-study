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
  if (!root) return true; // 빈 트리는 대칭적입니다.
  return isMirror(root.left, root.right);
};

function isMirror(t1, t2) {
  if (t1 === null && t2 === null) return true; // 두 노드 모두 null이면 대칭
  if (t1 === null || t2 === null) return false; // 한 노드만 null이면 비대칭
  if (t1.val !== t2.val) return false; // 노드의 값이 다르면 비대칭

  // 재귀적으로 확인
  return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}
