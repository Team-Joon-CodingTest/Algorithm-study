"""
bfs
"""

import sys
from collections import deque

input = sys.stdin.readline

n, m, k = map(int, input().split())

grid = [[0] * m for _ in range(n)]
visited = [[False] * m for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for _ in range(k):
    x, y = map(int, input().split())
    grid[x - 1][y - 1] = 1


def bfs(x, y):
    q = deque([(x, y)])
    visited[x][y] = True
    count = 0
    while q:
        x, y = q.popleft()
        count += 1
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == False:
                visited[nx][ny] = True
                if grid[nx][ny] == 1:
                    q.append((nx, ny))

    return count


result = 1
for x in range(n):
    for y in range(m):
        if grid[x][y] == 1:
            result = max(result, bfs(x, y))

print(result)