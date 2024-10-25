var canVisitAllRooms = function (rooms) {
  let visited = new Array(rooms.length).fill(false);
  //모든 방문 false로
  let stack = [0];
  //탐색할 방 목록, 시작은 0부터

  while (stack.length > 0) {
    //탐색할 방이 없을 때까지 실행

    let currentRoom = stack.pop();

    if (!visited[currentRoom]) {
      visited[currentRoom] = true; //방문 표시

      for (let key of rooms[currentRoom]) {
        if (!visited[key]) {
          stack.push(key);
        }
      }
    }
  }
  return visited.every((v) => v); //모든 방이 참인지 확인
};
