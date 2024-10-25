// 트리 노드 클래스 정의
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 트리가 자기 자신의 거울 이미지인지 확인하는 함수
var isSymmetric = function (root) {
  // 재귀적으로 두 노드를 비교하는 도우미 함수
  function isMirror(t1, t2) {
    // 두 노드가 모두 null이면 true
    if (t1 === null && t2 === null) return true;
    // 하나의 노드만 null이면 false
    if (t1 === null || t2 === null) return false;
    // 두 노드의 값이 다르면 false
    if (t1.val !== t2.val) return false;
    // 두 노드의 왼쪽과 오른쪽 자식 노드를 대칭적으로 비교
    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }
  // 루트 노드에서 시작하여 트리가 대칭인지 확인
  return isMirror(root, root);
};
