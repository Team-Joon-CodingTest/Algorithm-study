function inorderTraversal(root, arr) {
  if (!root) return;
  inorderTraversal(root.left, arr);
  arr.push(root.val);
  inorderTraversal(root.right, arr);
}

var findTarget = function (root, k) {
  const arr = [];
  inorderTraversal(root, arr);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};
