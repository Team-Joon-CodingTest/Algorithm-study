var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  // 첫 번째 행과 열의 값을 계산
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  // 격자를 순회하며 각 칸에 대한 최소 합을 계산
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  // 오른쪽 하단 칸의 값을 반환
  return grid[m - 1][n - 1];
};
