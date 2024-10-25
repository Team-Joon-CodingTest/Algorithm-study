/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(row, col) {
    // 가장자리인 경우
    if (row < 0 || col < 0 || row >= rows || col >= cols) {
      return false;
    }
    // 바다인 경우
    if (grid[row][col] === 1) {
      return true;
    }

    // 방문 표시
    grid[row][col] = 1;
    let isClosed = true;
    isClosed &= dfs(row + 1, col);
    isClosed &= dfs(row - 1, col);
    isClosed &= dfs(row, col + 1);
    isClosed &= dfs(row, col - 1);
    return isClosed;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0 && dfs(i, j)) {
        count++;
      }
    }
  }

  return count;
};
