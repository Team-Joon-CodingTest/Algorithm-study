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
  // 함수를 정의하여 트리의 잎 노드들을 배열에 저장
  const getLeaves = (node, leaves) => {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      leaves.push(node.val);
    }
    getLeaves(node.left, leaves);
    getLeaves(node.right, leaves);
  };

  // 각 트리의 잎 노드 값을 배열에 저장
  const leaves1 = [];
  const leaves2 = [];
  getLeaves(root1, leaves1);
  getLeaves(root2, leaves2);

  // 두 배열을 비교
  if (leaves1.length !== leaves2.length) return false;
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) return false;
  }
  return true;
};
