"""
bfs
"""
import sys
from collections import deque

input = sys.stdin.readline

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

m, n = map(int, input().split())
grid = []
visited = [[0] * m for _ in range(n)]

for _ in range(n):
    grid.append(list(map(int, input().split())))

# 익은 토마토 칸의 위치 큐에 넣기
q = deque([])
for i in range(n):
    for j in range(m):
        if grid[i][j] == 1:
            q.append((i, j))


def bfs():
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m and grid[nx][ny] == 0:
                grid[nx][ny] = grid[x][y] + 1
                q.append((nx, ny))


bfs()
result = 0
for arr in grid:
    for i in arr:
        if i == 0: # 익은 토마토가 없다면
            print(-1)
            exit()
    result = max(result, max(arr))
print(result-1)
