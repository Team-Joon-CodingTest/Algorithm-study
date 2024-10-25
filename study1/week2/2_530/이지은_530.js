var getMinimumDifference = function (root) {
  let minDiff = Infinity;
  let prev = null;

  function inOrderTraversal(node) {
    if (node === null) return;

    // 왼쪽 서브트리를 먼저 순회
    inOrderTraversal(node.left);

    // 이전 노드와의 차이 계산
    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }
    prev = node.val;

    // 오른쪽 서브트리 순회
    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);
  return minDiff;
};
