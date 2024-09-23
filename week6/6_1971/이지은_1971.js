/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (source === destination) {
    return true;
  }

  // 인접 리스트를 생성
  const adjList = new Array(n).fill(0).map(() => []);
  for (let edge of edges) {
    adjList[edge[0]].push(edge[1]);
    adjList[edge[1]].push(edge[0]);
  }

  // BFS를 사용하여 탐색
  const visited = new Array(n).fill(false);
  const queue = [source];

  while (queue.length > 0) {
    const vertex = queue.shift();
    visited[vertex] = true;

    for (let neighbor of adjList[vertex]) {
      if (neighbor === destination) {
        return true;
      }
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }

  return false;
};
