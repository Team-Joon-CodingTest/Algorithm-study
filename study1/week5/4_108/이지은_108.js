/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  function convertListToBST(left, right) {
    if (left > right) return null;

    // 중앙값을 루트로 선택
    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(nums[mid]);

    // 재귀적으로 서브트리 생성
    node.left = convertListToBST(left, mid - 1);
    node.right = convertListToBST(mid + 1, right);

    return node;
  }

  return convertListToBST(0, nums.length - 1);
};
