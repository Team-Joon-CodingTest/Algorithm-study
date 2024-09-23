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
  if (!root) return 0; // 빈 노드일 경우 0 반환

  let sum = 0;
  if (root.left) {
    // 왼쪽 자식이 잎 노드인 경우 그 값을 합계에 추가
    if (!root.left.left && !root.left.right) {
      sum += root.left.val;
    } else {
      // 왼쪽 자식이 잎 노드가 아닌 경우 재귀적으로 계산
      sum += sumOfLeftLeaves(root.left);
    }
  }

  // 오른쪽 자식에 대해서도 같은 함수를 재귀적으로 호출
  if (root.right) {
    sum += sumOfLeftLeaves(root.right);
  }

  return sum;
};
