N, M = map(int, input().split())
ary = []
visited_1 = [[False]*M for _ in range(N)]
visited_2 = [[False]*M for _ in range(N)]
for i in range(N):
    ary.append(list(map(str, input())))


def dfs_1(x, y):
    visited_1[x][y] = True

    ny = y + 1
    if ny < M and ary[x][ny] == '-':
        dfs_1(x, ny)


def dfs_2(x, y):
    visited_2[x][y] = True

    nx = x + 1
    if nx < N and ary[nx][y] == '|':
        dfs_2(nx, y)


cnt_1 = 0
cnt_2 = 0
for i in range(N):
    for j in range(M):
        if not visited_1[i][j] and ary[i][j] == '-':
            dfs_1(i, j)
            cnt_1 += 1

for i in range(M):
    for j in range(N):
        if not visited_2[j][i] and ary[j][i] == '|':
            dfs_2(j, i)
            cnt_2 += 1
print(cnt_1 + cnt_2)