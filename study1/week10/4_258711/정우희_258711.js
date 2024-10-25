// 런타임 해결 못함
function solution(edges) {
  const graph = {};
  const visited = new Set();
  let createdVertex = 0;
  let donutGraphs = 0;
  let barGraphs = 0;
  let figure8Graphs = 0;

  // 그래프 구성
  for (const [from, to] of edges) {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];
    graph[from].push(to);
    graph[to].push(from);
  }

  // 그래프 탐색을 위한 DFS 함수
  function dfs(node, shape) {
    visited.add(node);

    if (shape === 'donut') {
      if (graph[node].length !== 2) return false;
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          if (!dfs(neighbor, shape)) return false;
        }
      }
      return true;
    } else if (shape === 'bar') {
      if (graph[node].length !== 1) return false;
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          if (!dfs(neighbor, shape)) return false;
        }
      }
      return true;
    } else if (shape === 'figure8') {
      if (graph[node].length !== 4) return false;
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          if (!dfs(neighbor, 'donut')) return false;
        }
      }
      return true;
    }
  }

  // 그래프 탐색
  for (const vertex in graph) {
    if (!visited.has(vertex)) {
      if (dfs(vertex, 'donut')) {
        donutGraphs++;
      } else if (dfs(vertex, 'bar')) {
        barGraphs++;
      } else if (dfs(vertex, 'figure8')) {
        figure8Graphs++;
      } else {
        createdVertex++;
      }
    }
  }

  return [createdVertex, donutGraphs, barGraphs, figure8Graphs];
}
