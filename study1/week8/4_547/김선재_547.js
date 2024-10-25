/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);
  let provincesCnt = 0; // 주의 수

  function dfs(city) {
    visited[city] = true;
    // 현재 도시와 연결된 모든 도시에 대해 반복
    for (let nextCity = 0; nextCity < n; nextCity++) {
      // 현재 도시와 다음 도시가 연결되어 있고, 다음 도시를 아직 방문하지 않았다면
      if (isConnected[city][nextCity] === 1 && !visited[nextCity]) {
        // 다음 도시를 시작으로 깊이 우선 탐색 실행
        dfs(nextCity);
      }
    }
  }

  // 모든 도시를 시작점으로 하여 DFS 실행
  for (let city = 0; city < n; city++) {
    // 만약 현재 도시를 방문하지 않았다면
    if (!visited[city]) {
      // 주의 수를 증가시키고 DFS 실행
      provincesCnt++;
      dfs(city);
    }
  }

  return provincesCnt;
};
