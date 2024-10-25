import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
floor = [list(map(str, input().rstrip())) for _ in range(n)]

cnt = 0
visited = [[False] * m for _ in range(n)]


def bfs(x, y):
    q = deque([(x, y)])
    visited[x][y] = True
    decor = floor[x][y]  # 현재 바닥 장식

    while q:
        x, y = q.popleft()

        if decor == '-':  # 오른쪽 바닥 장식과 같은지
            nx, ny = x, y + 1
            if 0 <= ny < m and not visited[nx][ny] and floor[nx][ny] == '-':
                visited[nx][ny] = True
                q.append((nx, ny))
        if decor == '|':  # 아래의 장식과 같은지
            nx, ny = x + 1, y
            if 0 <= nx < n and not visited[nx][ny] and floor[nx][ny] == '|':
                visited[nx][ny] = True
                q.append((nx, ny))


for i in range(n):
    for j in range(m):
        if not visited[i][j]:
            bfs(i, j)
            cnt += 1

print(cnt)
