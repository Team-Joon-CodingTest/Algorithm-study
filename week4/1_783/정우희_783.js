var minDiffInBST = function (root) {
  let prev = null; // 이전 노드 값 저장을 위한 변수
  let minDiff = Infinity; // 가능한 가장 큰 값으로 최소 차이 초기화

  function inOrder(node) {
    if (node === null) {
      return;
    }
    // 왼쪽 자식 노드 방문
    inOrder(node.left);

    // 이전 노드가 있을 경우, 현재 노드와의 차이 계산
    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }
    // 현재 노드 값을 이전 노드 값으로 업데이트
    prev = node.val;

    // 오른쪽 자식 노드 방문
    inOrder(node.right);
  }

  // 중위 순회 시작
  inOrder(root);

  // 계산된 최소 차이 반환
  return minDiff;
};
