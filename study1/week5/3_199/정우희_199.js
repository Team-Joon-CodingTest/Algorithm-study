var rightSideView = function (root) {
  let result = []; // 결과를 저장할 배열

  function dfs(node, level) {
    if (node === null) {
      return;
    }
    // 현재 레벨에 해당하는 값이 없으면 추가
    if (level === result.length) {
      result.push(node.val);
    }

    // 오른쪽 노드와 왼쪽 노드에 대해 dfs를 재귀적으로 호출
    // 오른쪽 노드를 먼저 호출해 오른쪽 뷰를 확보
    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  }

  dfs(root, 0); // 루트부터 탐색을 시작합니다.
  return result;
};
