"""
BFS
인접한 칸 이동이니까

"""
import sys
from collections import deque

input = sys.stdin.readline

N, M = map(int, input().split())  # N: 세로(col)/ M: 가로(row)

grid = [list(map(int, input().strip())) for _ in range(N)]
"""
ex) grid = [[1, 0, 1, 1, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1],
            [1, 1, 1, 0, 1, 1]]
"""

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
visited = [[False] * M for _ in range(N)]


def bfs(x, y):
    q = deque([(x, y)])
    visited[x][y] = True
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < N and 0 <= ny < M and visited[nx][ny] == False:
                if grid[nx][ny] == 1:
                    grid[nx][ny] = grid[x][y] + 1  # 이동할 때 지나야 하는 최소 칸 수를 더하기
                    q.append((nx, ny))
                    visited[nx][ny] = True
    return grid[N - 1][M - 1]


print(bfs(0, 0))
