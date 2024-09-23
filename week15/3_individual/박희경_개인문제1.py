"""
BFS/백트래킹

 1. bfs로 2인 칸 주변 0 -> 2
 2. 백트래킹으로 3개의 벽을 모든 칸에 세워본다.
"""
import copy
import sys
from collections import deque

input = sys.stdin.readline

N, M = map(int, input().split())

maps = [list(map(int, input().split())) for _ in range(N)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs():
    q = deque()
    tmp_maps = copy.deepcopy(maps)

    for i in range(N):
        for j in range(M):
            if tmp_maps[i][j] == 2:  # 바이러스 큐에 넣기
                q.append((i, j))

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < N and 0 <= ny < M:
                if tmp_maps[nx][ny] == 0:
                    tmp_maps[nx][ny] = 2  # 바이러스 감염
                    q.append((nx, ny))

    global answer
    cnt = 0
    for i in range(N):
        for j in range(M):
            if tmp_maps[i][j] == 0:
                cnt += 1
    answer = max(answer, cnt)


def wall(cnt):
    if cnt == 3:
        bfs()
        return

    for i in range(N):
        for j in range(M):
            if maps[i][j] == 0:
                maps[i][j] = 1
                wall(cnt+1)
                maps[i][j] = 0


answer = 0
wall(0)
print(answer)
