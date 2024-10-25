var mergeTrees = function (root1, root2) {
  if (root1 === null) {
    return root2; // root1이 null이면 root2를 반환
  }
  if (root2 === null) {
    return root1; // root2가 null이면 root1을 반환
  }

  // 두 노드가 중첩되면 값을 합침
  root1.val += root2.val;

  // 왼쪽 자식 노드를 재귀적으로 병합
  root1.left = mergeTrees(root1.left, root2.left);
  // 오른쪽 자식 노드를 재귀적으로 병합
  root1.right = mergeTrees(root1.right, root2.right);

  return root1; // 병합된 트리 반환
};
