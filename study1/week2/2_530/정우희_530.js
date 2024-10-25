/* 이진트리 순회 종류
전위순회(preorder) : root -> left -> right
후위순회(postorder) : left -> right -> root

*530 문제 => 중위순회(inorder) : left -> root -> right */

var getMinimumDifference = function (root) {
  let minValue = Number.MAX_SAFE_INTEGER; // 초기화, 최소값 시작점
  let preValue = -1; // 모든 노드의 값이 양수라고 해서 속성을 -1로 초기화
  let init = false; // 첫 번째 노드를 처리할 때만 필요

  function inorder(node) {
    if (node === null) return;

    // left
    inorder(node.left); // 왼쪽 자식 노드로 재귀적으로 중위 순회를 수행

    // root
    if (!init) {
      init = true; // 첫 번째 노드를 방문했음을 표시
    } else {
      minValue = Math.min(minValue, node.val - preValue); // 현재 노드와 이전 노드의 값 차이의 절대값을 사용하여 minValue를 갱신
    }
    preValue = node.val; // 현재 노드의 값을 이전 노드 값으로 저장

    // right
    inorder(node.right);
  }

  inorder(root); // inorder 함수 호출
  return minValue; // 최소값을 반환
};
