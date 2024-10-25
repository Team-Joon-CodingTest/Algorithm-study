/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // 섬의 총 둘레
  let perimeter = 0;

  // 행, 열 초기화
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        // 섬이라면
        perimeter += 4; // 4면을 더해줌

        // 연결된 면의 수를 체크하고 빼기
        if (i > 0 && grid[i - 1][j] === 1) {
          perimeter -= 2;
        }
        if (j > 0 && grid[i][j - 1] === 1) {
          perimeter -= 2;
        }
      }
    }
  }

  return perimeter;
};
