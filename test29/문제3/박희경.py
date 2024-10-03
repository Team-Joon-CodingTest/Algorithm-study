import sys
from collections import deque

input = sys.stdin.readline

n, m, k = map(int, input().split())
path = [[0 for _ in range(m)] for _ in range(n)]

visited = [[False for _ in range(m)] for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for _ in range(k):
    r, c = map(int, input().split())

    path[r - 1][c - 1] = 1

max_size = 0


def bfs(x, y):
    size = 0
    q = deque([(x, y)])
    visited[x][y] = True

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m and path[nx][ny] == 1 and not visited[nx][ny]:
                visited[nx][ny] = True
                q.append((nx, ny))
                size += 1
    return size


for i in range(n):
    for j in range(m):
        if path[i][j] == 1:
            max_size = max(max_size, bfs(i, j))

print(max_size)