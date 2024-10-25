var possibleBipartition = function (n, dislikes) {
  const graph = new Array(n + 1);
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (let [a, b] of dislikes) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const colors = new Array(n + 1).fill(0);
  const dfs = (node, color) => {
    if (colors[node] !== 0) {
      return colors[node] === color;
    }
    colors[node] = color;
    for (let next of graph[node]) {
      if (!dfs(next, -color)) {
        return false;
      }
    }
    return true;
  };

  for (let i = 1; i <= n; i++) {
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false;
    }
  }
  return true;
};
