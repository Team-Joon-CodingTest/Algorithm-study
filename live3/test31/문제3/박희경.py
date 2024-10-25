import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

visited = [[0] * m for _ in range(n)]
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]


def bfs(x, y, area):
    q = deque([(x, y)])
    visited[x][y] = 1
    area = 1
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny]:
                if grid[nx][ny] == 1:
                    visited[nx][ny] = 1
                    area += 1
                    q.append((nx, ny))
    return area


result = []
for i in range(n):
    total = 0
    for j in range(m):
        if grid[i][j] == 1 and not visited[i][j]:
            result.append(bfs(i, j, 0))

if len(result) == 0:
    print(0)
    print(0)
else:
    print(len(result))
    print(max(result))
