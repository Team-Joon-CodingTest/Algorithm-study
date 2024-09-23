var minReorder = function (n, connections) {
  let reorder = 0;
  const visited = new Set();
  const adjList = connections.reduce((acc, [from, to]) => {
    acc[from] = acc[from] || [];
    acc[to] = acc[to] || [];
    acc[from].push(to); // 정방향
    acc[to].push(-from); // 역방향
    return acc;
  }, {});

  function dfs(city) {
    visited.add(city);
    (adjList[city] || []).forEach((next) => {
      if (!visited.has(Math.abs(next))) {
        reorder += next > 0 ? 1 : 0; // 정방향이면 카운트 증가
        dfs(Math.abs(next));
      }
    });
  }

  dfs(0); // 수도에서 시작
  return reorder;
};
