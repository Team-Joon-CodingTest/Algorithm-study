"""
BFS
"""
from collections import deque

N, M = map(int, input().split())

maze = []
for _ in range(N):
    maze.append(list(map(int, input())))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(x, y):
    queue = deque([(x, y)])

    while queue:
        x, y = queue.popleft()
        # 상하좌우 위치 확인
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue
            # 벽인 경우
            if maze[nx][ny] == 0:
                continue
            if maze[nx][ny] == 1:
                maze[nx][ny] = maze[x][y] + 1
                queue.append((nx, ny))
    return maze[N - 1][M - 1]


print(bfs(0, 0))

"""
5 6
101010
111111
000001
111111
111111
"""
