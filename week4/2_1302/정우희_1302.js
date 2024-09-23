var deepestLeavesSum = function (root) {
  let queue = []; // BFS를 위한 큐
  queue.push(root); // 루트 노드를 큐에 추가

  let levelSum = 0; // 현재 레벨의 합을 저장할 변수

  while (queue.length > 0) {
    let levelSize = queue.length; // 현재 레벨의 노드 수
    levelSum = 0; // 새 레벨에 진입할 때 합을 초기화

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift(); // 큐에서 노드를 꺼냄

      levelSum += node.val; // 현재 레벨의 합을 갱신

      // 왼쪽과 오른쪽 자식 노드가 있으면 큐에 추가
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  // 마지막 레벨의 합이 levelSum에 저장되어 있으므로 반환
  return levelSum;
};
