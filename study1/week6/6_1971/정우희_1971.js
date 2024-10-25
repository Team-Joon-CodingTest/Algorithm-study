var validPath = function (n, edges, source, destination) {
  // 그래프를 인접 리스트로 구성
  const graph = {};
  for (let [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }

  // DFS를 위한 함수
  function dfs(curr, visited) {
    if (curr === destination) return true; // 목적지에 도달한 경우
    visited[curr] = true; // 현재 정점을 방문 처리

    // 현재 정점에서 이동 가능한 모든 정점에 대해 DFS 수행
    for (let next of graph[curr] || []) {
      if (!visited[next] && dfs(next, visited)) {
        return true;
      }
    }
    return false;
  }

  // DFS 실행
  return dfs(source, {});
};
