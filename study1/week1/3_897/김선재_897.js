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
  // 중위 순회를 위한 재귀 함수
  const inOrderTraversal = function (node, tail) {
    if (node === null) {
      return tail;
    }

    // 현재 노드의 오른쪽 서브트리를 다음 순회에서 tail로 설정
    const result = inOrderTraversal(node.left, node);

    // 현재 노드를 오른쪽 자식으로 만들고, 왼쪽 자식은 null로 설정
    node.left = null;
    node.right = inOrderTraversal(node.right, tail);

    return result;
  };

  // 맨 처음 tail은 null로 설정
  return inOrderTraversal(root, null);
};
