var getMinimumDifference = function (root) {
  let minDiff = Infinity;
  let prevNodeVal = -1;

  const inorderTraversal = (node) => {
    if (!node) return;

    inorderTraversal(node.left);

    if (prevNodeVal !== -1) {
      minDiff = Math.min(minDiff, node.val - prevNodeVal);
    }
    prevNodeVal = node.val;

    inorderTraversal(node.right);
  };

  inorderTraversal(root);

  return minDiff;
};
