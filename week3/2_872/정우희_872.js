/* DFS(깊이 우선 탐색) 알고리즘
각 트리를 dfs 알고리즘으로 순회하며 잎 노드의 값을 배열에 저장
두 배열 비교해 모든 값이 같은 지 확인
모든 값이 같으면 true, 하나라도 다르면 false */

// 두 이진 트리가 '잎 비슷한'지 확인하는 함수 정의
var leafSimilar = function (root1, root2) {
  // 잎 노드의 값을 순서대로 저장할 배열을 선언
  const leaves1 = [];
  const leaves2 = [];

  // 재귀적으로 트리를 순회하며 잎 노드의 값을 배열에 저장하는 함수
  function dfs(node, leaves) {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        // 잎 노드에 도달했을 때 값을 배열에 추가
        leaves.push(node.val);
      } else {
        // 왼쪽 자식 노드로 깊이 우선 탐색 재귀 호출
        dfs(node.left, leaves);
        // 오른쪽 자식 노드로 깊이 우선 탐색 재귀 호출
        dfs(node.right, leaves);
      }
    }
  }

  // 두 트리에 대해 깊이 우선 탐색 실행
  dfs(root1, leaves1);
  dfs(root2, leaves2);

  // 두 잎 노드 값 배열의 길이가 다르면 바로 false 반환
  if (leaves1.length !== leaves2.length) {
    return false;
  }

  // 두 배열의 모든 값이 같은지 확인
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false;
    }
  }

  // 모든 값이 같으면 true 반환
  return true;
};
