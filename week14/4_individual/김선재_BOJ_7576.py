'''
[BFS]
1. 익은 토마토의 좌표를 큐에 삽입
2. 큐에 있는 익은 토마토를 꺼내 네방향으로 탐색
3. 테이블에 있는 최대값 출력
'''
import sys
from collections import deque

col, row = map(int, sys.stdin.readline().strip().split())
maps = []
for _ in range(row):
    maps.append(list(map(int, sys.stdin.readline().strip().split())))

# 이동할 네 가지 방향 (상, 하, 좌, 우)
dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]

q = deque()

# 토마토 중 익은 토마토들을 Q에 삽입
for r in range(row):
    for c in range(col):
        if maps[r][c] == 1:
            q.append([r, c])
        
while q:
    # 현재 큐에 삽입되어 있는 익은 토마토 개수만큼 반복
    length = len(q)
    for _ in range(length):
        # 익은 토마토 하나 꺼내기
        r, c = q.popleft()
            
        # 익은 토마토의 네 방향으로 이동하며 탐색
        for i in range(4):
            nr, nc = r + dr[i], c + dc[i]
            # 1.범위 2.익지 않은 토마토
            if 0 <= nr < row and 0 <= nc < col and maps[nr][nc] == 0:
                q.append([nr, nc]) # 큐에 추가
                maps[nr][nc] = maps[r][c] + 1

day = 0
for row in maps:
    for tomato in row:
    # BFS 이후에 안익은 토마토가 존재
        if tomato == 0:
            print(-1)
            exit(0)
    day = max(day, max(row))

# 익은토마토부터 시작했으므로 -1
print(day - 1)