/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let closedIslands = 0;

  function dfs(x, y) {
    // 경계 조건 확인
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
      return false;
    }
    // 물이거나 이미 방문한 경우
    if (grid[x][y] === 1) {
      return true;
    }
    // 현재 위치를 방문 처리
    grid[x][y] = 1;
    // 상하좌우 탐색
    const top = dfs(x - 1, y);
    const bottom = dfs(x + 1, y);
    const left = dfs(x, y - 1);
    const right = dfs(x, y + 1);
    return top && bottom && left && right;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // 땅을 만나고 DFS로 탐색했을 때 닫힌 섬인 경우
      if (grid[i][j] === 0 && dfs(i, j)) {
        closedIslands++;
      }
    }
  }

  return closedIslands;
};
