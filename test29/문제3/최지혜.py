from collections import deque
import sys

input = sys.stdin.readline

n, m, k = map(int, input().strip().split())
arr = [[0] * m for _ in range(n)]

# 쓰레기 좌표를 입력받아 해당 위치에 쓰레기 표시
for _ in range(k):
    r, c = map(int, input().strip().split())
    arr[r - 1][c - 1] = 1

# 상, 하, 좌, 우 이동을 위한 방향 벡터
d = [(0, 1), (0, -1), (1, 0), (-1, 0)]


def bfs(y, x):
    q = deque()
    q.append((y, x))
    arr[y][x] = 0  # 방문한 위치는 0으로 만들어 다시 방문하지 않도록 함
    cnt = 0
    while q:
        y, x = q.popleft() # 현재 위치 피익
        cnt += 1 # 쓰레기 개수 증가
        for dy, dx in d:
            Y, X = y + dy, x + dx
            if (0 <= Y < n) and (0 <= X < m) and arr[Y][X] == 1: # 범위를 벗어나지 않고 쓰레기가 있는지 확인
                arr[Y][X] = 0
                q.append((Y, X))

    return cnt


result = 1
for y in range(n):
    for x in range(m):
        if arr[y][x] == 1:
            result = max(result, bfs(y, x))

print(result)