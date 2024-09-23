const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [R, C, K] = input
  .shift()
  .split(' ')
  .map((v) => +v);
const graph = Array.from({ length: R }).map(() => []);
for (let i = 0; i < R; i++) {
  graph[i] = input[i].split('');
}
const visited = Array.from({ length: R }).map(() => new Array(C).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let cnt = 0;
function dfs(y, x, dep) {
  if (dep === K) {
    if (y === 0 && x === C - 1) {
      cnt++;
    }
    return;
  }
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= C || ny >= R || graph[ny][nx] === 'T')
      continue;
    if (!visited[ny][nx]) {
      visited[ny][nx] = true;
      dfs(ny, nx, dep + 1);
      visited[ny][nx] = false;
    }
  }
}

visited[R - 1][0] = true;
dfs(R - 1, 0, 1);

console.log(cnt);
