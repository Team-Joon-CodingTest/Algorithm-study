var sumOfLeftLeaves = function (root) {
  let sum = 0; // 왼쪽 잎들의 합을 저장할 변수

  function dfs(node) {
    if (!node) return; // 노드가 없으면 반환

    // 왼쪽 노드가 잎 노드인지 확인하고, 맞다면 합산
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    // 왼쪽과 오른쪽 자식 노드에 대해 깊이 우선 탐색
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root); // 루트 노드부터 탐색 시작
  return sum; // 계산된 합 반환
};
