"""
BFS
"""

import sys
from collections import deque

input = sys.stdin.readline

N = int(input())

grid = [list(input().rstrip()) for _ in range(N)]
visited = [[False for _ in range(N)] for _ in range(N)]
b_visited = [[False for _ in range(N)] for __ in range(N)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

cnt = 0
b_cnt = 0


def bfs(x, y, color):
    global cnt
    q = deque([(x, y)])
    while q:
        x, y = q.popleft()
        visited[x][y] = True
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
                if grid[nx][ny] == color:
                    q.append([nx, ny])
                    visited[nx][ny] = True
    cnt += 1


def b_bfs(x, y, color):
    global b_cnt
    q = deque([(x, y)])
    while q:
        x, y = q.popleft()
        b_visited[x][y] = True
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and not b_visited[nx][ny]:
                if grid[nx][ny] == color:
                    q.append([nx, ny])
                    b_visited[nx][ny] = True
                elif (color == 'R' and grid[nx][ny] == 'G') or (color == 'G' and grid[nx][ny] == 'R'):
                    q.append([nx, ny])
                    b_visited[nx][ny] = True
    b_cnt += 1


for i in range(N):
    for j in range(N):
        if not visited[i][j]:
            bfs(j, i, grid[i][j])
        if not b_visited[i][j]:
            b_bfs(j, i, grid[i][j])
print(cnt, end=' ')
print(b_cnt, end=' ')
