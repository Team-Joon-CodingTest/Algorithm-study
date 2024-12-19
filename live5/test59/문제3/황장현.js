function dfs(x, y) {}
function solution(maps) {
  const selo = maps.length;
  const galo = maps[0].length;
  const visited = Array.from({ length: selo }, () => Array(galo).fill(false));
  const result = [];
  for (let i = 0; i < selo; i++) {
    for (let j = 0; j < galo; j++) {
      if (!visited[i][j] && maps[i][j] !== 'X') {
        result.push(dfs(i, j));
      }
    }
  }
}

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1']));
