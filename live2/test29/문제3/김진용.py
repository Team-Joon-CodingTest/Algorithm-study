import sys
sys.setrecursionlimit(10**6)
N, M, K = map(int, input().split())

ary = [[0]*M for _ in range(N)]
visited = [[False]*M for _ in range(N)]

for i in range(K):
    x, y = map(int, input().split())
    ary[x-1][y-1] = 1


def dfs(x, y):
    global cnt
    visited[x][y] = True
    cnt += 1
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and ary[nx][ny] == 1:
            dfs(nx, ny)
m = 0
for i in range(N):
    for j in range(M):
        if not visited[i][j] and ary[i][j] == 1:
            cnt = 0
            dfs(i, j)
            m = max(cnt, m)
print(m)