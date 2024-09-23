var islandPerimeter = function (grid) {
  let perimeter = 0;

  // 격자의 모든 셀을 순회
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 땅을 발견하면
      if (grid[i][j] === 1) {
        // 네 변을 확인
        // 위쪽 변
        if (i === 0 || grid[i - 1][j] === 0) perimeter++;
        // 아래쪽 변
        if (i === grid.length - 1 || grid[i + 1][j] === 0) perimeter++;
        // 왼쪽 변
        if (j === 0 || grid[i][j - 1] === 0) perimeter++;
        // 오른쪽 변
        if (j === grid[i].length - 1 || grid[i][j + 1] === 0) perimeter++;
      }
    }
  }

  return perimeter;
};
