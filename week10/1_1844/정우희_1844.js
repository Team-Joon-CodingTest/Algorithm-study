function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 상하좌우 방향
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  // BFS를 위한 큐
  const queue = [];

  // 시작점에서의 최단거리를 저장할 배열
  const dist = Array.from(Array(n), () => Array(m).fill(-1));

  // 시작점 초기화
  queue.push([0, 0]);
  dist[0][0] = 1;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    // 상하좌우 이동
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 맵 범위 체크
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        // 벽이 아니고, 방문하지 않은 경우
        if (maps[nx][ny] === 1 && dist[nx][ny] === -1) {
          // 최단거리 갱신
          dist[nx][ny] = dist[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  // 상대 팀 진영에 도착하지 못한 경우
  if (dist[n - 1][m - 1] === -1) {
    return -1;
  }

  // 상대 팀 진영에 도착한 경우 최단거리 반환
  return dist[n - 1][m - 1];
}
