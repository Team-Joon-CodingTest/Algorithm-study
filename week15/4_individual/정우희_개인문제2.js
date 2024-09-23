var allPathsSourceTarget = function (graph) {
  const result = [];
  const target = graph.length - 1;

  const dfs = (node, path) => {
    if (node === target) {
      result.push([...path, node]);
      return;
    }

    for (const next of graph[node]) {
      dfs(next, [...path, node]);
    }
  };

  dfs(0, []);

  return result;
};
