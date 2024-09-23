// 트리 노드 클래스 정의
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 이진 트리의 최대 깊이를 구하는 함수
var maxDepth = function (root) {
  // 루트 노드가 null이면 깊이는 0
  if (root === null) {
    return 0;
  }
  // 왼쪽과 오른쪽 서브트리의 최대 깊이를 계산하고, 더 큰 값에 1을 더해서 반환
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
