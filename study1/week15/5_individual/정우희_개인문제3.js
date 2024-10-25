var findSecondMinimumValue = function (root) {
  let min1 = root.val;
  let min2 = Infinity;

  const dfs = (node) => {
    if (!node) return;

    if (node.val < min1) {
      min2 = min1;
      min1 = node.val;
    } else if (node.val > min1 && node.val < min2) {
      min2 = node.val;
    }

    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  return min2 === Infinity ? -1 : min2;
};
