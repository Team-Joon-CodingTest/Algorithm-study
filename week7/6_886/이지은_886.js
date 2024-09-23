var possibleBipartition = function (n, dislikes) {
  const graph = new Array(n + 1);
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (let [a, b] of dislikes) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const color = new Array(n + 1).fill(0);

  const dfs = (node, c) => {
    if (color[node] !== 0) {
      return color[node] === c;
    }
    color[node] = c;
    for (let next of graph[node]) {
      if (!dfs(next, -c)) {
        return false;
      }
    }
    return true;
  };

  for (let i = 1; i <= n; i++) {
    if (color[i] === 0 && !dfs(i, 1)) {
      return false;
    }
  }

  return true;
};
