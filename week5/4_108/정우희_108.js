var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  function convertListToBST(left, right) {
    if (left > right) return null;

    // 중앙값을 찾아 루트로 설정
    let mid = parseInt((left + right) / 2);
    let node = new TreeNode(nums[mid]);

    // 중앙값의 왼쪽 값들로 왼쪽 서브트리 만듦
    node.left = convertListToBST(left, mid - 1);
    // 중앙값의 오른쪽 값들로 오른쪽 서브트리 만듦
    node.right = convertListToBST(mid + 1, right);

    return node;
  }

  return convertListToBST(0, nums.length - 1);
};
