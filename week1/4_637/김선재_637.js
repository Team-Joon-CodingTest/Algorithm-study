/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (root === null) {
    return [];
  }

  const result = [];

  // BFS를 위한 큐
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length; // 현재 레벨의 노드 수
    let levelSum = 0;

    // 현재 레벨의 노드 값을 누적
    for (let i = 0; i < levelSize; i++) {
      // 큐에서 하나의 노드를 꺼냄
      const node = queue.shift();
      // 해당 노드의 값을 더해줌
      levelSum += node.val;

      // 자식 노드를 큐에 추가
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    // 현재 레벨의 평균을 결과 배열에 추가
    result.push(levelSum / levelSize);
  }

  return result;
};
