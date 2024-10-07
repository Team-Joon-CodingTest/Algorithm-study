const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [n, m] = input[0];
  const pic = input.slice(1);

  //위,오른쪽,아래,왼쪽
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const visited = Array.from({ length: n }, () => Array(m).fill(0));

  let maxArea = 0;
  let count = 0;

  function dfs(x, y) {
    let area = 1; // 현재 그림의 넓이 카운트
    visited[x][y] = 1; // 현재 좌표 방문 처리

    for (let i = 0; i < 4; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];

      if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
        if (!visited[newX][newY] && pic[newX][newY] === 1) {
          area += dfs(newX, newY);
        }
      }
    }
    return area;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (pic[i][j] === 1 && !visited[i][j]) {
        // 1이면서 방문하지 않은 좌표에서만 DFS 시작
        count++; // 그림의 개수 증가
        const currentArea = dfs(i, j); // 현재 그림의 넓이를 계산
        maxArea = Math.max(maxArea, currentArea); // 최대 넓이를 갱신
      }
    }
  }
  return `${count}\n${maxArea}`;
}

console.log(solution(input));
