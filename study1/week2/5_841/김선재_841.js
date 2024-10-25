/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  // 방문여부를 저장할 배열
  let visitedRecursive = [];

  function dfsRecursive(room) {
    // 이미 방문했던 room 이라면 탐색을 종료
    if (visitedRecursive.includes(room)) {
      return;
    }

    // 방문 표시
    visitedRecursive.push(room);

    // 현재 방에서 얻을 수 있는 열쇠를 이용하여 다음 방을 재귀적으로 호출
    for (let i = 0; i < rooms[room].length; i++) {
      dfsRecursive(rooms[room][i]);
    }
  }

  // 열려있는 0번 방부터 시작하여 DFS 수행
  dfsRecursive(0);

  // 모든 방을 방문했는지 여부
  return visitedRecursive.length === rooms.length;
};
