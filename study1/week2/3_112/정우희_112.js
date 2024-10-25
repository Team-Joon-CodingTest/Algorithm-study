// 깊이 우선 탐색(DFS)
var hasPathSum = function (root, targetSum) {
  // 트리가 비어있으면 false 반환
  if (root === null) {
    return false;
  }

  // 리프 노드 확인: 자식이 없는 노드
  if (root.left === null && root.right === null) {
    // 현재 노드의 값이 남은 targetSum과 같다면 true 반환
    return targetSum === root.val;
  }

  // 왼쪽 또는 오른쪽 자식으로 재귀 호출
  // 남은 targetSum에서 현재 노드의 값을 빼서 전달
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
