/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function minReorder(n, connections) {
  const graph = new Array(n).fill(null).map(() => []);

  for (const connection of connections) {
    const u = connection[0]; // 출발
    const v = connection[1]; // 도착
    graph[u].push(v); // u -> v : 도시 u에서 출발하는 간선들의 목록
    graph[v].push(-u); // v -> u : 도시 v로 들어오는 간선들의 목록
  }

  // City Zero 에서 dfs 시작
  return dfs(graph, 0, -1);
}

/**
 * @param {number[][]} graph - 그래프 정보
 * @param {number} u - 현재 도시
 * @param {number} parent - 이전 도시 (부모 노드)
 */
function dfs(graph, u, parent) {
  let changeCnt = 0;

  for (const v of graph[u]) {
    // 부모 노드인 경우 무시
    if (Math.abs(v) === parent) continue;
    // 양방향 간선인 경우(u->v)
    if (v > 0) ++change;

    changeCnt += dfs(graph, Math.abs(v), u);
  }

  return changeCnt;
}
