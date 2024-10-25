/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        // 상, 하, 좌, 우의 물 셀이나 경계를 확인하여 둘레를 계산
        if (i === 0 || grid[i - 1][j] === 0) perimeter++; // 상
        if (i === grid.length - 1 || grid[i + 1][j] === 0) perimeter++; // 하
        if (j === 0 || grid[i][j - 1] === 0) perimeter++; // 좌
        if (j === grid[i].length - 1 || grid[i][j + 1] === 0) perimeter++; // 우
      }
    }
  }

  return perimeter;
};
