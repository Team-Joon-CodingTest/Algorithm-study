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
  var averages = [];
  var queue = [root]; //큐에 루트 노드 넣기

  while (queue.length > 0) {
    // 큐에 아직 방문할 노드가 남아 있는 동안
    var levelLength = queue.length; // 현재 큐의 길이는 현재 레벨에 있는 노드의 수입니다.
    var sum = 0; // 현재 레벨의 노드 값들의 합계

    for (var i = 0; i < levelLength; i++) {
      // 현재 레벨의 모든 노드에 대해
      var node = queue.shift(); // 큐에서 노드를 하나 꺼냅니다.
      sum += node.val; // 노드의 값을 합계에 더합니다.

      // 만약 자식 노드가 있다면 큐에 추가합니다.
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // 평균을 계산하여 배열에 추가합니다.
    averages.push(sum / levelLength);
  }

  return averages;
};
