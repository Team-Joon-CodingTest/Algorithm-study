var closedIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(row, col) {
    if (row < 0 || col < 0 || row >= rows || col >= cols) return false;
    if (grid[row][col] === 1) return true;

    grid[row][col] = 1; // 방문한 0을 1로 변경하여 중복 방문을 방지
    const top = dfs(row - 1, col);
    const bottom = dfs(row + 1, col);
    const left = dfs(row, col - 1);
    const right = dfs(row, col + 1);
    return top && bottom && left && right;
  }

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        if (dfs(i, j)) {
          count++;
        }
      }
    }
  }

  return count;
};
