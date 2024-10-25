from collections import deque


def solution(maps):
    answer = []
    m = len(maps[0])
    n = len(maps)
    visited = [[0] * m for _ in range(n)]

    def bfs(i, j, maps, visited):
        dx = [-1, 1, 0, 0]
        dy = [0, 0, -1, 1]
        queue = deque()
        queue.append((i, j))
        visited[i][j] = 1
        area = int(maps[i][j])
        while queue:
            x, y = queue.popleft()
            for d in range(4):
                nx = x + dx[d]
                ny = y + dy[d]

                if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == 0 and maps[nx][ny] != 'X':
                    visited[nx][ny] = 1
                    area += int(maps[nx][ny])
                    queue.append((nx, ny))
        return area

    for i in range(len(maps)):
        for j in range(len(maps[i])):
            if visited[i][j] == 0 and maps[i][j] != "X":
                answer.append(bfs(i, j, maps, visited))
    if len(answer) == 0:
        answer.append(-1)
    answer.sort()
    return answer
