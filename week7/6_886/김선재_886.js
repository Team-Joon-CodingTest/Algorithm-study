/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  // 인접 리스트 생성
  const graph = new Array(n + 1).fill(null).map(() => []);
  for (const [a, b] of dislikes) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const colors = new Array(n + 1).fill(0);

  function dfs(node, color) {
    if (colors[node] !== 0) {
      return colors[node] === color;
    }
    colors[node] = color;
    for (const neighbor of graph[node]) {
      if (!dfs(neighbor, -color)) {
        return false;
      }
    }
    return true;
  }

  for (let i = 1; i <= n; i++) {
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false;
    }
  }

  return true;
};
