// 깊이 우선 탐색(DFS) or 너비 우선 탐색(BFS)
// 깊이 우선 탐색(DFS)로 풀이
var canVisitAllRooms = function (rooms) {
  let visited = new Set(); // 방문한 방을 추적하기 위한 집합
  visited.add(0); // 방 0은 처음부터 열려 있음

  let stack = [0]; // DFS를 위한 스택, 방 0에서 시작

  while (stack.length > 0) {
    let room = stack.pop(); // 방문할 방

    for (let key of rooms[room]) {
      // 현재 방에서 얻을 수 있는 모든 열쇠에 대해
      if (!visited.has(key)) {
        // 아직 방문하지 않은 방이라면
        visited.add(key); // 방문으로 표시
        stack.push(key); // 스택에 추가하여 나중에 방문
      }
    }
  }

  return visited.size === rooms.length; // 모든 방을 방문했는지 확인
};
