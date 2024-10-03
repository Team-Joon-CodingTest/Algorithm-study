import sys
sys.setrecursionlimit(10**6)

input = sys.stdin.readline

r, c = map(int, input().split())

ary = []

for i in range(r):
    ary.append(list(map(str, input())))
visited = [[False] * c for _ in range(r)]


def dfs(x, y, vs):
    visited[x][y] = True
    if ary[x][y] == 'v':
        vs[1] += 1
    elif ary[x][y] == 'o':
        vs[0] += 1
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < r and 0 <= ny < c and not visited[nx][ny] and ary[nx][ny] != '#':
            dfs(nx, ny, vs)


dic = {'s': 0, 'w': 0}

for i in range(r):
    for j in range(c):
        if ary[i][j] != '#' and not visited[i][j]:
            vs = [0, 0]
            dfs(i, j, vs)
            if vs[0] > vs[1]:
                dic['s'] += vs[0]
            else:
                dic['w'] += vs[1]
print(* dic.values())
