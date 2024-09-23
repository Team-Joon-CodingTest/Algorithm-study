"""
인접
bfs
"""
import sys
from collections import deque

input = sys.stdin.readline

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

n = int(input())
grid = [list(map(int, input().rstrip())) for _ in range(n)]


def bfs(x, y):
    q = deque([(x, y)])
    grid[x][y] = 0  # 첫번째 집 방문 처리
    count = 1
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < n:
                if grid[nx][ny] == 1:
                    grid[nx][ny] = 0
                    q.append((nx, ny))
                    count += 1
    return count


result = []
for i in range(n):
    for j in range(n):
        if grid[i][j] == 1:
            cnt = bfs(i, j)
            result.append(cnt)
result.sort()

print(len(result))
for res in result:
    print(res)